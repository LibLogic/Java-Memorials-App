package com.liblogic.angelcloud.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import com.liblogic.angelcloud.model.Flowers;

public interface FlowerRepository extends PagingAndSortingRepository<Flowers, Long>{
	public List<Flowers> findByBurialId(Long flowerId);
}
