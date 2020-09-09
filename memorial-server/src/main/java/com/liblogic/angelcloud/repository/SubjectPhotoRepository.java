package com.liblogic.angelcloud.repository;

import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.liblogic.angelcloud.model.SubjectPhoto;

@Repository
public interface SubjectPhotoRepository extends PagingAndSortingRepository<SubjectPhoto, Long> {
	public List<SubjectPhoto> findByPhotosId(Long photoId);
}
