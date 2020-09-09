package com.liblogic.angelcloud.repository;

import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.Donors;
import com.liblogic.angelcloud.model.Individuals;

@Repository
public interface DonorIndividualRepository extends PagingAndSortingRepository<Individuals, Long> {
	public List<Donors> findByDonorsId(Long donorId);
}
