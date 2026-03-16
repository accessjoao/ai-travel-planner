import type { DayPlan } from "../types/travel";

interface DayCardProps {
  day: DayPlan;
}

export function DayCard({ day }: DayCardProps) {
  const times: Array<keyof DayPlan> = ["morning", "afternoon", "evening"];

  return (
    <div className="flex flex-col items-center gap-4 mb-10 font-mono">

      {/* Day Header */}
      <div className="bg-[#003366] border border-white/20 rounded-lg p-4 text-center w-full max-w-2xl">
        <strong>Day {day.day}</strong>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3 w-full max-w-2xl">
        {times.map((time) => (
          <div
            key={time}
            className="bg-black border border-white/10 rounded-lg p-4 text-center"
          >
            <div className="font-semibold mb-2">
              {time.charAt(0).toUpperCase() + time.slice(1)}
            </div>
            <div className="text-white/80">{day[time]}</div>
          </div>
        ))}
      </div>

    </div>
  );
}