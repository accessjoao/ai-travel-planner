package api

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"ai-travel-planner/internal/models"
)

func TestGenerate_InvalidJSON(t *testing.T) {

	handler := NewItineraryHandler()

	req := httptest.NewRequest(
		http.MethodPost,
		"/api/itinerary",
		bytes.NewBuffer([]byte(`invalid json`)),
	)

	w := httptest.NewRecorder()

	handler.Generate(w, req)

	resp := w.Result()

	if resp.StatusCode != http.StatusBadRequest {
		t.Errorf("expected status %d, got %d", http.StatusBadRequest, resp.StatusCode)
	}
}

func TestGenerate_OPTIONSPreflight(t *testing.T) {

	handler := NewItineraryHandler()

	req := httptest.NewRequest(
		http.MethodOptions,
		"/api/itinerary",
		nil,
	)

	w := httptest.NewRecorder()

	handler.Generate(w, req)

	resp := w.Result()

	if resp.StatusCode != http.StatusOK {
		t.Errorf("expected status %d, got %d", http.StatusOK, resp.StatusCode)
	}
}

func TestGenerate_ValidRequestStructure(t *testing.T) {

	handler := NewItineraryHandler()

	requestBody := models.ItineraryRequest{
		City:      "Paris",
		Days:      2,
		Budget:    500,
		Interests: []string{"food", "art"},
	}

	jsonBody, _ := json.Marshal(requestBody)

	req := httptest.NewRequest(
		http.MethodPost,
		"/api/itinerary",
		bytes.NewBuffer(jsonBody),
	)

	w := httptest.NewRecorder()

	handler.Generate(w, req)

	resp := w.Result()

	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusInternalServerError {
		t.Errorf("unexpected status code: %d", resp.StatusCode)
	}
}