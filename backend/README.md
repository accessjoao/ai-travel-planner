# AI Travel Planner Backend

A robust Go-based backend service that powers the AI Travel Planner application. This service handles API requests, integrates with Anthropic's Claude AI for generating travel itineraries, and manages data persistence for personalized trip planning.

## 🚀 Features

- **RESTful API**: Clean, well-structured endpoints for travel planning
- **AI Integration**: Seamless integration with Claude AI for itinerary generation
- **Data Models**: Structured models for itineraries and travel data
- **Service Layer**: Business logic separation with dedicated service components
- **Repository Pattern**: Data access abstraction for scalability
- **CORS Support**: Configured for frontend integration
- **Error Handling**: Comprehensive error responses and logging

## 🛠️ Tech Stack

- **Language**: Go 1.21+
- **Framework**: Gin (HTTP web framework)
- **AI Client**: Anthropic Claude API
- **Architecture**: Clean Architecture with layered design
- **Deployment**: Docker-ready, cloud-native

## 📦 Installation

1. Ensure you have Go 1.21+ installed.

2. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-travel-planner.git
   cd ai-travel-planner/backend
   ```

3. Install dependencies:
   ```bash
   go mod tidy
   ```

4. Set up environment variables:
   Create a `.env` file with:
   ```
   CLAUDE_API_KEY=your_claude_api_key_here
   ```

5. Run the server:
   ```bash
   go run cmd/server/main.go
   ```

The server will start on `http://localhost:8080`.

## 🏗️ Project Structure

```
backend/
├── cmd/
│   └── server/
│       └── main.go          # Application entry point
├── internal/
│   ├── ai/
│   │   └── claude_client.go # Claude AI integration
│   ├── api/
│   │   └── itinerary_handler.go # HTTP handlers
│   ├── models/
│   │   └── itinerary.go     # Data models
│   ├── repository/          # Data access layer
│   └── service/
│       └── itinerary_service.go # Business logic
├── go.mod                   # Go module file
└── README.md               # This file
```

## 🔧 API Endpoints

- `POST /api/itinerary` - Generate a new travel itinerary

## 🚀 Deployment

### Cloud Deployment

This backend is designed to deploy to cloud platforms like AWS, GCP, or Azure with minimal configuration.

## 🤝 Contributing

This is a portfolio project showcasing Go development and AI integration. Feel free to explore and adapt for your own projects!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with 🐹 Go and powered by Claude AI