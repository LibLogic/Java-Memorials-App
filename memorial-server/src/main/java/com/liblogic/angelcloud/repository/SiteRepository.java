package com.liblogic.angelcloud.repository;

import com.liblogic.angelcloud.model.Site;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SiteRepository extends PagingAndSortingRepository<Site, Long> {
	
}
