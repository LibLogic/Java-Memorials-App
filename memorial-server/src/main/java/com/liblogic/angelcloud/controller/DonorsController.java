package com.liblogic.angelcloud.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
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
    
    @GetMapping("/donors/{donorId}")
    public void getPhotoById(@PathVariable Long donorId) {
        donorRepository.findById(donorId);
    }
    
    @GetMapping("/burials/{burialId}/donors")
    public Donors getDonorsByBurial(@PathVariable Long burialId) {
        return donorRepository.findByBurialId(burialId);
    }
    
    @PutMapping("burials/{burialId}/addDonor")
    public ResponseEntity<?> updateDonor(@RequestBody Donors newDonor, @PathVariable Long burialId) {
    	Optional<Burial> burial = burialRepository.findById(burialId);
    	newDonor.setBurial(burial.get());
    	newDonor.setId(burial.get().getId());
    	donorRepository.save(newDonor);
    	return ResponseEntity.ok("resource saved");
    }
}