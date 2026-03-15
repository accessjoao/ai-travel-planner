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
	mux.HandleFunc("/api/itinerary", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}
		handler.Generate(w, r)
	})

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
