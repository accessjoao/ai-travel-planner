"use client";

import { useState } from "react";
import type { GenerateItineraryInput } from "../types/travel";

interface TravelFormProps {
  onGenerate: (input: GenerateItineraryInput) => void;
  loading: boolean;
}

export function TravelForm({ onGenerate, loading }: TravelFormProps) {
  const [city, setCity] = useState("");
  const [days, setDays] = useState<number | "">("");
  const [budget, setBudget] = useState<number | "">("");
  const [interests, setInterests] = useState("");

  function handleSubmit() {
    onGenerate({ city, days, budget, interests });
  }

  return (
    <div className="space-y-3">
      <div className="w-full md:ml-6">
        <input
          placeholder="City"
          className="px-4 py-3 w-full max-w-4xl bg-black border border-white/20 rounded-lg font-mono block"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="w-full md:ml-12">
        <input
          type="number"
          placeholder="Number of Days"
          className="px-4 py-3 w-full max-w-4xl bg-black border border-white/20 rounded-lg font-mono block"
          value={days}
          onChange={(e) => setDays(e.target.value === "" ? "" : Number(e.target.value))}
        />
      </div>

      <div className="w-full md:ml-18">
        <input
          type="number"
          placeholder="Budget"
          className="px-4 py-3 w-full max-w-4xl bg-black border border-white/20 rounded-lg font-mono block"
          value={budget}
          onChange={(e) => setBudget(e.target.value === "" ? "" : Number(e.target.value))}
        />
      </div>

      <div className="w-full md:ml-24">
        <input
          placeholder="Interests (food, culture, nightlife)"
          className="px-4 py-3 w-full max-w-4xl bg-black border border-white/20 rounded-lg font-mono block"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
      </div>

      <div className="w-full max-w-4xl md:ml-30">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full border border-white/30 rounded-lg p-3 font-mono transition
            ${loading ? "opacity-70" : "cursor-pointer hover:bg-white hover:text-black"}
          `}
        >
          {loading ? "Hang tight, generating..." : "Generate Itinerary"}
        </button>
      </div>
    </div>
  );
}