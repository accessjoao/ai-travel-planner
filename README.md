# AI Travel Planner

A full-stack web application that leverages AI to create personalized travel itineraries. Built with a modern tech stack featuring a Go backend and Next.js frontend, this project demonstrates expertise in AI integration, full-stack development, and responsive web design.

## 🌟 Overview

The AI Travel Planner helps users plan their dream trips by generating customized itineraries based on their preferences. The application uses Anthropic's Claude AI to create detailed, day-by-day travel plans that include activities, dining recommendations, and local insights.

### Access Deployment

https://access-ai-travel-planner.vercel.app/

<img width="1324" height="661" alt="access-ai-travel-planner" src="https://github.com/user-attachments/assets/e51f9aea-0a27-4161-b046-66f22aa1ee8b" />

## 🏗️ Architecture

This project follows a microservices-inspired architecture with separate frontend and backend components:

- **Frontend**: Next.js application with TypeScript and Tailwind CSS
- **Backend**: Go service with RESTful API and AI integration
- **AI Integration**: Claude AI for natural language processing and itinerary generation

## 🚀 Features

- **AI-Powered Planning**: Generate intelligent travel itineraries using advanced AI
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Generation**: Instant itinerary creation with loading states
- **Clean UI**: Modern, intuitive interface with smooth interactions
- **Type-Safe Development**: Full TypeScript support across the stack

## 🛠️ Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Components

### Backend
- Go 1.21+
- Gin Web Framework
- Anthropic Claude API

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- Go 1.21+
- Claude API Key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-travel-planner.git
   cd ai-travel-planner
   ```

2. Set up the backend:
   ```bash
   cd backend
   go mod tidy
   # Set up .env with CLAUDE_API_KEY
   go run cmd/server/main.go
   ```

3. Set up the frontend (in a new terminal):
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
ai-travel-planner/
├── backend/          # Go backend service
│   ├── cmd/server/   # Application entry point
│   ├── internal/     # Internal packages
│   └── go.mod
├── frontend/         # Next.js frontend
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   └── package.json
└── README.md         # This file
```

## 🤝 Contributing

This is a portfolio project. While it's not actively maintained for contributions, feel free to fork and adapt it for your own learning or projects!


## 👨‍💻 Author

**João Felipe Silveira**

- LinkedIn: [https://www.linkedin.com/in/joao-felipe-silveira/](https://www.linkedin.com/in/joao-felipe-silveira/)
- Portfolio: This project showcases full-stack development skills

---

Built with ❤️ and AI-powered innovation
