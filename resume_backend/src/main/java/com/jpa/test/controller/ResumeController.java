package com.jpa.test.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.jpa.test.service.ResumeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ResumeController {
	
	private final ResumeService resumeService;
	@PostMapping("/generate")
		 public ResponseEntity<Map<String, Object>> generateResume(@RequestBody Map<String, Object> request) {
		        Map<String, Object> resume = resumeService.generateResume(request);
		        return ResponseEntity.ok(resume);
		    }

}
