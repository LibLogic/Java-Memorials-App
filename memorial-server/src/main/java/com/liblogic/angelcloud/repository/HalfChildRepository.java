package com.liblogic.angelcloud.repository;

import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.HalfChildren;

@Repository
public interface HalfChildRepository extends PagingAndSortingRepository<HalfChildren, Long> {
	public List<HalfChildren> findByParentsId(Long parentId);
}
