package api

import (
	"encoding/json"
	"net/http"

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

	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}

	result, err := h.Service.GenerateItinerary(req)

	if err != nil {
		http.Error(w, "Failed to generate itinerary", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(result))
}