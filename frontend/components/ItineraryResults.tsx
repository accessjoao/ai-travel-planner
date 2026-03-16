"use client";

import { motion, AnimatePresence } from "framer-motion";
import { DayCard } from "./DayCard";
import { LoadingSpinner } from "./LoadingSpinner";
import type { ItineraryResultsProps } from "../types/travel";

export function ItineraryResults({ itinerary, loading }: ItineraryResultsProps) {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.6 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  // Show spinner while loading
  if (loading) {
    return (
      <div className="mt-10">
        <LoadingSpinner />
      </div>
    );
  }

  // Nothing yet
  if (!itinerary) {
    return null;
  }

  return (
    <AnimatePresence>
      {itinerary && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center mt-10"
        >
          <motion.div
            variants={itemVariants}
            className="bg-black border border-white/20 text-center rounded-lg p-4 font-mono mb-6 w-full max-w-3xl"
          >
            <strong>
              Here's your {itinerary.days.length}-day travel plan for {itinerary.city}
            </strong>
          </motion.div>

          {itinerary.days.map((day) => (
            <motion.div key={day.day} variants={itemVariants}>
              <DayCard day={day} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}