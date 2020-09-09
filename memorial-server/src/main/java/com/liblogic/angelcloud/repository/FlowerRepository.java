package com.liblogic.angelcloud.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.Flowers;
import com.liblogic.angelcloud.model.Photos;

@Repository
public interface FlowerRepository extends PagingAndSortingRepository<Flowers, Long> {
	public Photos findByBurialId(Long burialId);
}
