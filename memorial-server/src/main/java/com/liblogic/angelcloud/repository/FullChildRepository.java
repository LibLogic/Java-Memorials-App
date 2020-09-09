package com.liblogic.angelcloud.repository;

import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.FullChildren;

@Repository
public interface FullChildRepository extends PagingAndSortingRepository<FullChildren, Long> {
//	public List<FullChildren> findByFullChildrenId(Long fullChildId);
}
