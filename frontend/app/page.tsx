"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { TravelForm } from "../components/TravelForm";
import { ItineraryResults } from "../components/ItineraryResults";
import type { Itinerary, GenerateItineraryInput } from "../types/travel";

export default function Home() {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState(false);

  async function generateItinerary(input: GenerateItineraryInput) {
    const { city, days, budget, interests } = input;

    if (!city || !days) {
      alert("Please enter at least a city and number of days.");
      return;
    }

    setLoading(true);
    setItinerary(null);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/itinerary`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            city,
            days: Number(days),
            budget: Number(budget),
            interests: interests
              .split(",")
              .map((i) => i.trim())
              .filter(Boolean),
          }),
        }
      );

      const data: Itinerary = await res.json();
      setItinerary(data);
    } catch (err) {
      console.error(err);
      alert("Failed to generate itinerary");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#00193A] text-white flex justify-center p-4 sm:p-8 overflow-x-hidden">
      <div className="w-full max-w-7xl space-y-6">
        <Header />
        <TravelForm onGenerate={generateItinerary} loading={loading} />
        <ItineraryResults itinerary={itinerary} loading={loading} />
      </div>
    </main>
  );
}