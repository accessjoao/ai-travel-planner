export interface DayPlan {
  day: number;
  morning: string;
  afternoon: string;
  evening: string;
}

export interface Itinerary {
  city: string;
  days: DayPlan[];
}

export interface GenerateItineraryInput {
  city: string;
  days: number | "";
  budget: number | "";
  interests: string;
}

export interface ItineraryResultsProps {
  itinerary: Itinerary | null;
  loading: boolean;
}