package com.liblogic.angelcloud.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.liblogic.angelcloud.model.Site;
import com.liblogic.angelcloud.repository.SiteRepository;

@Service
public class SearchService {

	@Autowired
	public SiteRepository siteRepository;
	
	public Site getSiteByLocation(Double latitude, Double longitude) {
		return siteRepository.findByLatitudeAndLongitude(latitude, longitude);
	}

}
