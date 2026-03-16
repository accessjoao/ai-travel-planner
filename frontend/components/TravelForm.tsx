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

  function handleSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    onGenerate({ city, days, budget, interests });
    setCity("");
    setDays("");
    setBudget("");
    setInterests("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* City */}
      <div className="w-full lg:ml-5">
        <input
          placeholder="City"
          className="px-4 py-3 w-full max-w-2xl bg-black/60 backdrop-blur border border-white/20 rounded-lg font-mono focus:border-white/40 outline-none transition"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {/* Days + Budget row */}
      <div className="flex flex-col lg:flex-row md:gap-4 w-full lg:ml-10 justify-start">
        {/* Days Dropdown */}
        <div className="flex-1 mb-4 md:mb-0 max-w-sm">
          <label className="block text-white/60 font-mono text-sm mb-1">
            Number of Days
          </label>
          <div className="relative">
            <select
              className="appearance-none px-4 py-3 w-full bg-black/60 backdrop-blur border border-white/20 cursor-pointer rounded-lg font-mono focus:border-white/40 outline-none transition"
              value={days}
              onChange={(e) =>
                setDays(e.target.value ? parseInt(e.target.value, 10) : "")
              }
            >
              <option value="" className="text-white/30"></option>
              {Array.from({ length: 7 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d} className="text-white">
                  {d} {d === 1 ? "day" : "days"}
                </option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none">
              ▼
            </span>
          </div>
        </div>

        {/* Budget Dropdown */}
        <div className="flex-1 max-w-sm">
          <label className="block text-white/60 font-mono text-sm mb-1">
            Budget (USD)
          </label>
          <div className="relative">
            <select
              className="appearance-none px-4 py-3 w-full bg-black/60 backdrop-blur border border-white/20 cursor-pointer rounded-lg font-mono focus:border-white/40 outline-none transition"
              value={budget}
              onChange={(e) =>
                setBudget(e.target.value ? parseInt(e.target.value, 10) : "")
              }
            >
              <option value="" className="text-white/60"></option>
              <option value={200} className="text-white">$50–$200</option>
              <option value={500} className="text-white">$201–$500</option>
              <option value={700} className="text-white">$501–$1000</option>
              <option value={3000} className="text-white">$1001–$5000</option>
              <option value={8000} className="text-white">$5001–$10000</option>
              <option value={15000} className="text-white">$10000+</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none">
              ▼
            </span>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="w-full mt-10 lg:ml-15">
        <input
          placeholder="Interests (food, culture, nightlife, nature...)"
          className="px-4 py-3 w-full max-w-4xl bg-black/60 backdrop-blur border border-white/20 rounded-lg font-mono focus:border-white/40 outline-none transition"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
      </div>

      {/* Button */}
      <div className="w-full mt-10 max-w-5xl lg:ml-30">
        <button
          type="submit"
          disabled={loading}
          className={`w-full border border-white/30 rounded-lg p-3 font-mono transition
            ${loading ? "opacity-70" : "cursor-pointer hover:bg-white hover:text-black"}
          `}
        >
          {loading ? "Hang tight, generating..." : "Generate Itinerary"}
        </button>
      </div>
    </form>
  );
}