package com.liblogic.angelcloud.repository;

import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.Contributors;

@Repository
public interface ContributorRepository extends PagingAndSortingRepository<Contributors, Long> {
	public List<Contributors> findByDonorsId(Long donorId);
}
