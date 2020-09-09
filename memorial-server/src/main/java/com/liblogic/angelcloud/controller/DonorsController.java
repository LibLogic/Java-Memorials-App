package com.liblogic.angelcloud.controller;

import java.net.URI;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.liblogic.angelcloud.model.Burial;
import com.liblogic.angelcloud.model.Donors;
import com.liblogic.angelcloud.repository.BurialRepository;
import com.liblogic.angelcloud.repository.DonorRepository;

@RestController
public class DonorsController {
	
    @Autowired
    private BurialRepository burialRepository;
	
    @Autowired
    private DonorRepository donorRepository;
    
    @GetMapping("/donors")
    public Iterable<Donors> getAllDonors() {
        return donorRepository.findAll();
    }
    
    @PostMapping("/burials/{burialId}/donors")
    public ResponseEntity<Object> addDonors(@RequestBody Donors newDonor, @PathVariable Long burialId) {
    	Optional<Burial> burial = burialRepository.findById(burialId);
		newDonor.setBurial(burial.get());		
    	Donors donor = donorRepository.save(newDonor);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
        		.path("/{id}")
        		.buildAndExpand(donor.getId()).toUri();
        return ResponseEntity.created(location).build();
    } 
}
