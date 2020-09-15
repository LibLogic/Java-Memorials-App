package com.liblogic.angelcloud.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.liblogic.angelcloud.model.Burial;

@Repository
public interface BurialRepository extends PagingAndSortingRepository<Burial, Long>{ 
	
	public List<Burial> findBySiteId(Long siteId);
	
}
