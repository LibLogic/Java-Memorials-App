package com.liblogic.angelcloud.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.Donors;

@Repository
public interface DonorRepository extends PagingAndSortingRepository<Donors, Long> {
	public Donors findByBurialId(Long burialId);
}
