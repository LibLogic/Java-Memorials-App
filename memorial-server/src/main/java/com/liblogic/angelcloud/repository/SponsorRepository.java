package com.liblogic.angelcloud.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.Sponsors;

@Repository
public interface SponsorRepository extends PagingAndSortingRepository<Sponsors, Long> {
	public Sponsors findByBurialId(Long burialId);
}
