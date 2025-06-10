package com.jpa.test.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.jpa.test.service.ResumeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1/resume")  
public class ResumeController {
	
	private final ResumeService resumeService;
	@PostMapping("/generate")
		 public ResponseEntity<Map<String, Object>> generateResume(@RequestBody Map<String, Object> request) {
		        Map<String, Object> resume = resumeService.generateResume(request);
		        return ResponseEntity.ok(resume);
		    }

}
