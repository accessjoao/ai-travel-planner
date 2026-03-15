package ai

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"
	"os"
)

type ClaudeClient struct {
	ApiKey string
	Model  string
}

func NewClaudeClient() *ClaudeClient {
	return &ClaudeClient{
		ApiKey: os.Getenv("CLAUDE_API_KEY"),
		Model:  os.Getenv("CLAUDE_MODEL"),
	}
}

func (c *ClaudeClient) Generate(prompt string) (string, error) {

	body := map[string]interface{}{
		"model": c.Model, // ← model now comes from .env
		"max_tokens": 1000,
		"messages": []map[string]string{
			{
				"role":    "user",
				"content": prompt,
			},
		},
	}

	jsonBody, err := json.Marshal(body)
	if err != nil {
		return "", err
	}

	req, err := http.NewRequest(
		"POST",
		"https://api.anthropic.com/v1/messages",
		bytes.NewBuffer(jsonBody),
	)

	if err != nil {
		return "", err
	}

	req.Header.Set("x-api-key", c.ApiKey)
	req.Header.Set("anthropic-version", "2023-06-01")
	req.Header.Set("content-type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)

	if err != nil {
		return "", err
	}

	defer resp.Body.Close()

	responseBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	return string(responseBody), nil
}