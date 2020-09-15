package com.liblogic.angelcloud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.liblogic.angelcloud.model.Site;
import com.liblogic.angelcloud.service.SearchService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class SearchController {
	
	@Autowired
	public SearchService searchService;
	
	@GetMapping("/search")
	public Site getSiteByLocation(@RequestParam Double latitude, @RequestParam Double longitude) {
		return searchService.getSiteByLocation(latitude, longitude);
	}
}
