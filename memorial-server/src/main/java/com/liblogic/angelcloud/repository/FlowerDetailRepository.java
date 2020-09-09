package com.liblogic.angelcloud.repository;

import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.Details;
import com.liblogic.angelcloud.model.Flowers;

@Repository
public interface FlowerDetailRepository extends PagingAndSortingRepository<Details, Long> {
	public List<Flowers> findByFlowersId(Long flowerId);
}
