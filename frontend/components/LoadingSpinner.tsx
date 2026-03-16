"use client";

import { useEffect, useState } from "react";

const messages = [
  "Finding hidden gems...",
  "Mapping out your perfect days...",
  "Checking the best food spots..."
];

export function LoadingSpinner() {
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState<"normal" | "warming" | "timeout">("normal");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Multi-stage timeout logic
  useEffect(() => {
    const warmingTimer = setTimeout(() => {
      setStage("warming");
    }, 15000);

    const timeoutTimer = setTimeout(() => {
      setStage("timeout");
    }, 25000);

    return () => {
      clearTimeout(warmingTimer);
      clearTimeout(timeoutTimer);
    };
  }, []);

  if (stage === "timeout") {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <p className="text-white/80 font-mono text-center text-lg">
          This is taking longer than usual.
        </p>
        <p className="text-white/60 font-mono text-center text-sm max-w-md">
          The server might be busy or waking up. Try again in a moment.
        </p>
      </div>
    );
  }

  if (stage === "warming") {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <p className="text-white/80 font-mono text-center text-lg">
          Almost there…
        </p>
        <p className="text-white/60 font-mono text-center text-sm max-w-md">
          The server is warming up. Thanks for your patience.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-4">
      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>

      {/* Rotating message */}
      <p className="text-white/70 font-mono text-center text-sm">
        {messages[index]}
      </p>
    </div>
  );
}