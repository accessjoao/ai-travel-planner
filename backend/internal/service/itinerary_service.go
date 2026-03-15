package service

import (
	"fmt"
	"strings"

	"ai-travel-planner/internal/ai"
	"ai-travel-planner/internal/models"
)

type ItineraryService struct {
	Claude *ai.ClaudeClient
}

func NewItineraryService() *ItineraryService {
	return &ItineraryService{
		Claude: ai.NewClaudeClient(),
	}
}

func (s *ItineraryService) GenerateItinerary(req models.ItineraryRequest) (string, error) {

	interests := strings.Join(req.Interests, ", ")

	prompt := fmt.Sprintf(`
Generate a %d day travel itinerary for %s.

Budget: %d USD
Interests: %s

Return ONLY JSON in this format:

{
 "days":[
   {
     "day":1,
     "morning":"",
     "afternoon":"",
     "evening":""
   }
 ]
}
`, req.Days, req.City, req.Budget, interests)

	return s.Claude.Generate(prompt)
}