package com.liblogic.angelcloud.controller;

import java.util.Optional;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.liblogic.angelcloud.model.Burial;
import com.liblogic.angelcloud.model.Photos;
import com.liblogic.angelcloud.repository.BurialRepository;
import com.liblogic.angelcloud.repository.PhotoRepository;

@RestController
public class PhotosController {
    
    @Autowired
    private BurialRepository burialRepository;
    
    @Autowired
    private PhotoRepository photoRepository;
    
    @GetMapping("/photos")
    public Iterable<Photos> getAllPhotos() {
        return photoRepository.findAll();
    }
    
    @GetMapping("/photos/{photoId}")
    public Optional<Photos> getPhotoById(@PathVariable Long photoId) {
        return photoRepository.findById(photoId);
    }

    @GetMapping("/burials/{burialId}/photos")
    public Photos getPhotosByBurial(@PathVariable Long burialId) {
        return photoRepository.findByBurialId(burialId);
    }
	
	@PutMapping("burials/{burialId}/addMainPhoto")
	public ResponseEntity<?> updatePhoto(@RequestBody Photos newPhoto, @PathVariable Long burialId) {
		Optional<Burial> burial = burialRepository.findById(burialId);
		newPhoto.setBurial(burial.get());
		newPhoto.setId(burial.get().getId());
		photoRepository.save(newPhoto);
		return ResponseEntity.ok("resource saved");
	}
    
}
