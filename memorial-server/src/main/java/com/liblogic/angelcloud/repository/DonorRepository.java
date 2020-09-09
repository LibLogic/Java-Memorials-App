package com.liblogic.angelcloud.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.Donors;
import com.liblogic.angelcloud.model.Photos;

@Repository
public interface DonorRepository extends PagingAndSortingRepository<Donors, Long> {
	public Photos findByBurialId(Long burialId);
}
