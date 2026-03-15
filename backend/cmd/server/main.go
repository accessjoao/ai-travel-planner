package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"

	"ai-travel-planner/internal/api"
)

func main() {

	// Load .env only in non-production environments
	if os.Getenv("GO_ENV") != "production" {
		err := godotenv.Load()
		if err != nil {
			log.Println("Warning: .env file not found or failed to load")
		}
	}

	mux := http.NewServeMux()

	handler := api.NewItineraryHandler()

	// Root route
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain")
		w.Write([]byte("AI Travel Planner API is running"))
	})

	// Health check route
	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain")
		w.Write([]byte("ok"))
	})

	// Itinerary endpoint (POST only)
	mux.HandleFunc("/api/itinerary", handler.Generate)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Println("Server running on port:", port)

	err := http.ListenAndServe(":"+port, mux)
	if err != nil {
		log.Fatal(err)
	}
}
