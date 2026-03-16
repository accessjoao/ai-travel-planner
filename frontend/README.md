# AI Travel Planner Frontend

A modern, responsive web application built with Next.js that helps users plan their perfect trips using AI-powered recommendations. This frontend interfaces with a Go backend to generate personalized itineraries based on user preferences.

## 🚀 Features

- **AI-Powered Itineraries**: Generate customized travel plans using Claude AI
- **Interactive Travel Form**: Easy-to-use interface for specifying trip details
- **Dynamic Itinerary Display**: Beautiful cards showing day-by-day plans
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Loading States**: Smooth user experience with loading spinners
- **TypeScript Support**: Type-safe development with full TypeScript integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend Integration**: RESTful API with Go backend
- **AI Integration**: Anthropic Claude API
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-travel-planner.git
   cd ai-travel-planner/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8080
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
frontend/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable React components
│   ├── TravelForm.tsx  # Trip planning form
│   ├── ItineraryResults.tsx # Results display
│   ├── DayCard.tsx     # Individual day cards
│   └── LoadingSpinner.tsx # Loading component
├── types/              # TypeScript type definitions
└── public/             # Static assets
```

## 🔧 Development

- **Linting**: ESLint configured for code quality
- **Type Checking**: Full TypeScript support

## 🤝 Contributing

This is a portfolio project. Feel free to fork and modify for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and TypeScript
