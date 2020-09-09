package com.liblogic.angelcloud.controller;

import java.net.URI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.liblogic.angelcloud.model.Photos;
import com.liblogic.angelcloud.model.SubjectPhoto;
import com.liblogic.angelcloud.repository.PhotoRepository;
import com.liblogic.angelcloud.repository.SubjectPhotoRepository;

@RestController
public class SubjectPhotoController {
    
    @Autowired
    private PhotoRepository photoRepository;
    
    @Autowired
    private SubjectPhotoRepository subjectPhotoRepository;
    
    @GetMapping("/subjectphotos")
    public Iterable<SubjectPhoto> getAllSubjectPhotos() {
        return subjectPhotoRepository.findAll();
    }
    
    @GetMapping("photos/{photoId}/subjectphotos")
    public Iterable<SubjectPhoto> getSubjectsByPhotoId(@PathVariable Long photoId) {
        return subjectPhotoRepository.findByPhotosId(photoId);
    }
    
    @PostMapping("/burials/{burialId}/photos/{photoId}/subjectphotos")
    public ResponseEntity<Object> addSubjectPhoto(@RequestBody SubjectPhoto newSubjectPhoto, @PathVariable Long burialId, @PathVariable Long photoId) {
    	Photos photo = photoRepository.findByBurialId(burialId);
    	newSubjectPhoto.setPhotos(photo);
    	SubjectPhoto subject = subjectPhotoRepository.save(newSubjectPhoto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
        		.path("/{id}")
        		.buildAndExpand(subject.getId()).toUri();
        return ResponseEntity.created(location).build();
    }                                                                                                                                                                                                                                                                    
}
