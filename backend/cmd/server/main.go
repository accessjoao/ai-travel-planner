package main

import (
	"log"
	"net/http"

	"github.com/joho/godotenv"

	"ai-travel-planner/internal/api"
)

func main() {

	// Load .env file
	err := godotenv.Load()
	if err != nil {
		log.Println("Warning: .env file not found or failed to load")
	}

	mux := http.NewServeMux()

	handler := api.NewItineraryHandler()

	mux.HandleFunc("/api/itinerary", handler.Generate)

	log.Println("Server running on :8080")

	err = http.ListenAndServe(":8080", mux)
	if err != nil {
		log.Fatal(err)
	}
}