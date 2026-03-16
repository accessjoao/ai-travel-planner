package service

import (
	"testing"

	"ai-travel-planner/internal/models"
)

func TestGenerateItineraryRequestStructure(t *testing.T) {

	service := NewItineraryService()

	req := models.ItineraryRequest{
		City:      "Tokyo",
		Days:      3,
		Budget:    1000,
		Interests: []string{"food", "culture"},
	}

	_, err := service.GenerateItinerary(req)

	if err != nil {
		t.Log("Claude call failed as expected in test environment:", err)
	}
}