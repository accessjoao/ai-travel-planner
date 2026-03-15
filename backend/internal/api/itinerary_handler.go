package api

import (
	"encoding/json"
	"log"
	"net/http"
	"regexp"
	"time"

	"ai-travel-planner/internal/models"
	"ai-travel-planner/internal/service"
)

type ItineraryHandler struct {
	Service *service.ItineraryService
}

func NewItineraryHandler() *ItineraryHandler {
	return &ItineraryHandler{
		Service: service.NewItineraryService(),
	}
}

func (h *ItineraryHandler) Generate(w http.ResponseWriter, r *http.Request) {

	var req models.ItineraryRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}

	var rawResponse string
	var err error
	maxRetries := 3
	for i := 0; i < maxRetries; i++ {
		rawResponse, err = h.Service.GenerateItinerary(req)
		if err == nil {
			break
		}
		log.Printf("Claude API attempt %d failed: %v", i+1, err)
		time.Sleep(time.Second * 1)
	}
	if err != nil {
		http.Error(w, "Claude API request failed after retries", http.StatusInternalServerError)
		return
	}

	var claudeResp map[string]interface{}
	if err := json.Unmarshal([]byte(rawResponse), &claudeResp); err != nil {
		http.Error(w, "Failed to parse Claude response", http.StatusInternalServerError)
		return
	}

	contentArr, ok := claudeResp["content"].([]interface{})
	if !ok || len(contentArr) == 0 {
		http.Error(w, "Claude response missing content", http.StatusInternalServerError)
		return
	}
	textField, ok := contentArr[0].(map[string]interface{})["text"].(string)
	if !ok {
		http.Error(w, "Claude content text not found", http.StatusInternalServerError)
		return
	}

	re := regexp.MustCompile("(?s)```(?:json)?\\s*(\\{.*\\})\\s*```")
	matches := re.FindStringSubmatch(textField)
	clean := textField
	if len(matches) > 1 {
		clean = matches[1]
	}

	var itinerary models.ItineraryResponse
	if err := json.Unmarshal([]byte(clean), &itinerary); err != nil {
		http.Error(w, "Failed to parse itinerary JSON", http.StatusInternalServerError)
		return
	}

	if len(itinerary.Days) < req.Days {
		for i := len(itinerary.Days); i < req.Days; i++ {
			itinerary.Days = append(itinerary.Days, models.DayPlan{
				Day:       i + 1,
				Morning:   "Activity not specified",
				Afternoon: "Activity not specified",
				Evening:   "Activity not specified",
			})
		}
	} else if len(itinerary.Days) > req.Days {
		itinerary.Days = itinerary.Days[:req.Days]
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(itinerary)
}