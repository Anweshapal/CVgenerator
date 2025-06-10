package com.jpa.test.service;

import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ResumeService {

    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private final WebClient webClient;
    private final ObjectMapper objectMapper;

    @Autowired
    public ResumeService(WebClient.Builder webClientBuilder, ObjectMapper objectMapper) {
        this.webClient = webClientBuilder.build();
        this.objectMapper = objectMapper;
    }

    public Map<String, Object> generateResume(Map<String, Object> request) {
        String prompt = buildResumePrompt(request);
        Map<String, Object> requestBody = Map.of(
                "contents", new Object[]{
                        Map.of("parts", new Object[]{
                                Map.of("text", prompt)
                        })
                });

        try {
            String response = webClient.post()
                    .uri(geminiApiUrl + "?key=" + geminiApiKey)
                    .header("Content-Type", "application/json")
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            System.out.println("Gemini API Response: " + response);
            return extractGeneratedResume(response);

        } catch (Exception e) {
            return Map.of("error", e.getMessage());
        }
    }

    private Map<String, Object> extractGeneratedResume(String response) {
        try {
            JsonNode rootNode = objectMapper.readTree(response);
            System.out.println("Parsed JSON Response: " + rootNode.toPrettyString());

            JsonNode textNode = rootNode.path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text");

            if (textNode.isMissingNode() || textNode.asText().isEmpty()) {
                return Map.of("error", "Invalid response format from AI.");
            }

            // Remove AI-generated code block formatting
            String rawJson = textNode.asText()
                    .replaceAll("^```json", "")  // Remove starting ```json
                    .replaceAll("```$", "")      // Remove ending ```
                    .trim();

            return objectMapper.readValue(rawJson, HashMap.class);

        } catch (Exception e) {
            return Map.of("error", "Error parsing AI response: " + e.getMessage());
        }
    }

    private String buildResumePrompt(Map<String, Object> request) {
        return String.format("""
                Generate a professional IT job resume in JSON format based on the following description:
                
                Input Description:
                "%s"
                
                JSON Structure Requirements:
                
                personalInformation: Include the following keys:
                - fullName (string)
                - email (string)
                - phoneNumber (string)
                - location (string)
                - linkedin (string or null if not provided)
                - github (string or null if not provided)
                - portfolio (string or null if not provided)
                
                summary: Short professional summary.
                
                skills: Include categories like:
                - programmingLanguages (array)
                - frameworks (array)
                - databases (array)
                - cloud (array)
                - devOpsTools (array)
                - otherSkills (array)
                
                experience: Array of previous job experiences.
                
                education: Array of educational qualifications.
                
                projects: Array of notable projects.
                
                Return the output in JSON format.
                """, request.get("userDescription"));
    }
}
