package com.liblogic.angelcloud.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
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
    
    @GetMapping("/subjectPhotos")
    public Iterable<SubjectPhoto> getAllSubjectPhotos() {
        return subjectPhotoRepository.findAll();
    }
    
    @GetMapping("/subjectPhotos/{subjectId}")
    public Optional<SubjectPhoto> getSubjectsByPhotoId(@PathVariable Long subjectId) {
        return subjectPhotoRepository.findById(subjectId);
    }
    
    @GetMapping("/burials/{burialId}/subjectPhotos")
    public List<SubjectPhoto> getSubjectsByBurialId(@PathVariable Long burialId) {
    	Photos photo = photoRepository.findByBurialId(burialId);
    	Long photoId = photo.getId();
        return subjectPhotoRepository.findByPhotosId(photoId);
    }
    
    @PostMapping("/burials/{burialId}/addSubjectPhoto")
    public ResponseEntity<Object> addSubjectPhoto(@RequestBody SubjectPhoto newSubjectPhoto, @PathVariable Long burialId) {
    	Photos photo = photoRepository.findByBurialId(burialId);
    	newSubjectPhoto.setPhotos(photo);
    	SubjectPhoto subject = subjectPhotoRepository.save(newSubjectPhoto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
        		.path("/{id}")
        		.buildAndExpand(subject.getId()).toUri();
        return ResponseEntity.created(location).build();
    } 
    
    @DeleteMapping("/subjectPhotos/{subjectId}")
    public void deleteSubjectsByPhotoId(@PathVariable Long subjectId) {
        subjectPhotoRepository.deleteById(subjectId);
    }
}
