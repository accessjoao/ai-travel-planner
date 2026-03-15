package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"

	"ai-travel-planner/internal/api"
)

func main() {

	// Load .env file (useful locally; Render uses dashboard env vars)
	err := godotenv.Load()
	if err != nil {
		log.Println("Warning: .env file not found or failed to load")
	}

	mux := http.NewServeMux()

	handler := api.NewItineraryHandler()

	mux.HandleFunc("/api/itinerary", handler.Generate)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Println("Server running on port:", port)

	err = http.ListenAndServe(":"+port, mux)
	if err != nil {
		log.Fatal(err)
	}
}