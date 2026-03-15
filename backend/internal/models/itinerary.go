package models

type ItineraryRequest struct {
	City      string   `json:"city"`
	Days      int      `json:"days"`
	Budget    int      `json:"budget"`
	Interests []string `json:"interests"`
}

type DayPlan struct {
	Day       int    `json:"day"`
	Morning   string `json:"morning"`
	Afternoon string `json:"afternoon"`
	Evening   string `json:"evening"`
}

type ItineraryResponse struct {
	Days []DayPlan `json:"days"`
}