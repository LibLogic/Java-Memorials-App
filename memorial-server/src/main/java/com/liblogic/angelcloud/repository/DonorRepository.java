package com.liblogic.angelcloud.repository;

import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.Donors;

@Repository
public interface DonorRepository extends PagingAndSortingRepository<Donors, Long> {
	public List<Donors> findBySponsorsId(Long donorId);
}
