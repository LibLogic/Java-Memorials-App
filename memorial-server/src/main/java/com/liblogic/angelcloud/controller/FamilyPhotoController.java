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
import com.liblogic.angelcloud.model.FamilyPhoto;
import com.liblogic.angelcloud.model.Photos;
import com.liblogic.angelcloud.repository.FamilyPhotoRepository;
import com.liblogic.angelcloud.repository.PhotoRepository;

@RestController
public class FamilyPhotoController {
	
    @Autowired
    private PhotoRepository photoRepository;
    
    @Autowired
    private FamilyPhotoRepository familyPhotoRepository;
    
    @GetMapping("/familyPhotos")
    public Iterable<FamilyPhoto> getAllFamilyPhotos() {
        return familyPhotoRepository.findAll();
    }
    
    @GetMapping("/familyPhotos/{familyId}")
    public Optional<FamilyPhoto> getFamilysByPhotoId(@PathVariable Long familyId) {
        return familyPhotoRepository.findById(familyId);
    }
    
    @GetMapping("/burials/{burialId}/familyPhotos")
    public List<FamilyPhoto> getFamilysByBurialId(@PathVariable Long burialId) {
    	Photos photo = photoRepository.findByBurialId(burialId);
    	Long photoId = photo.getId();
        return familyPhotoRepository.findByPhotosId(photoId);
    }
    
    @PostMapping("/burials/{burialId}/addFamilyPhoto")
    public ResponseEntity<Object> addFamilyPhoto(@RequestBody FamilyPhoto newFamilyPhoto, @PathVariable Long burialId) {
    	Photos photo = photoRepository.findByBurialId(burialId);
    	newFamilyPhoto.setPhotos(photo);
    	FamilyPhoto family = familyPhotoRepository.save(newFamilyPhoto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
        		.path("/{id}")
        		.buildAndExpand(family.getId()).toUri();
        return ResponseEntity.created(location).build();
    }
    
    @DeleteMapping("/familyPhotos/{familyId}")
    public void deleteSubjectsByPhotoId(@PathVariable Long familyId) {
        familyPhotoRepository.deleteById(familyId);
    }
}
