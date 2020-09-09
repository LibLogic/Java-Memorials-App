package com.liblogic.angelcloud.repository;

import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.FamilyPhoto;

@Repository
public interface FamilyPhotoRepository extends PagingAndSortingRepository<FamilyPhoto, Long> {
	public List<FamilyPhoto> findByPhotosId(Long photoId);
}
