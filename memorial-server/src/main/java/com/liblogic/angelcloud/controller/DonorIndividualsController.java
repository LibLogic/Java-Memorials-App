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

import com.liblogic.angelcloud.model.Donors;
import com.liblogic.angelcloud.model.FamilyPhoto;
import com.liblogic.angelcloud.model.Individuals;
import com.liblogic.angelcloud.model.Photos;
import com.liblogic.angelcloud.repository.DonorIndividualRepository;
import com.liblogic.angelcloud.repository.FamilyPhotoRepository;
import com.liblogic.angelcloud.repository.PhotoRepository;

@RestController
public class DonorIndividualsController {
	
    @Autowired
    private PhotoRepository photoRepository;
    
    @Autowired
    private DonorIndividualRepository donorIndividualRepository;
    
    @GetMapping("/individuals")
    public Iterable<Individuals> getAllDonorIndividuals() {
        return donorIndividualRepository.findAll();
    }
    
//    @GetMapping("donors/{donorId}/individuals")
//    public Individuals getIndividualsByDonorId(@PathVariable Long donorId) {
//        return donorIndividualRepository.findByDonorsId(donorId)
//    }
    
//    @PostMapping("/burials/{burialId}/photos/{photoId}/familyphotos")
//    public ResponseEntity<Object> addFamilyPhoto(@RequestBody FamilyPhoto newFamilyPhoto, @PathVariable Long burialId, @PathVariable Long photoId) {
//    	Photos photo = photoRepository.findByBurialId(burialId);
//    	newFamilyPhoto.setPhotos(photo);
//    	FamilyPhoto subject = familyPhotoRepository.save(newFamilyPhoto);
//        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
//        		.path("/{id}")
//        		.buildAndExpand(subject.getId()).toUri();
//        return ResponseEntity.created(location).build();
//    }

}
