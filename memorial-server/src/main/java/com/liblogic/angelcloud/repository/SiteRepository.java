package com.liblogic.angelcloud.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.Site;

@Repository
public interface SiteRepository extends PagingAndSortingRepository<Site, Long> {
	public Site findByLatitudeAndLongitude(Double latitude, Double longitude);
}
