"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { TravelForm } from "../components/TravelForm";
import { ItineraryResults } from "../components/ItineraryResults";
import type { Itinerary, GenerateItineraryInput } from "../types/travel";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function generateItinerary(input: GenerateItineraryInput) {
    const { city, days, budget, interests } = input;

    setErrorMessage(null);

    if (!city || !days) {
      setErrorMessage("Please enter at least a city and number of days.");
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

      if (!res.ok) {
        throw new Error("Bad response from server");
      }

      const data: Itinerary = await res.json();
      setItinerary(data);
    } catch (err) {
      console.error(err);
      setErrorMessage("Failed to generate itinerary. Try again soon.");
    }

    setLoading(false);
  }

  return (
    <>
      <main className="min-h-screen bg-[#00193A] text-white flex justify-center p-4 sm:p-8 overflow-x-hidden">
        <div className="w-full max-w-7xl space-y-6">
          <Header />
          <TravelForm onGenerate={generateItinerary} loading={loading} />
          <ItineraryResults
            itinerary={itinerary}
            loading={loading}
            errorMessage={errorMessage}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}