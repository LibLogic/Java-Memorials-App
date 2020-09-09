package com.liblogic.angelcloud.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.Parents;

@Repository
public interface ParentRepository extends PagingAndSortingRepository<Parents, Long>{
	public Parents findByBurialId(Long burialId);
}
