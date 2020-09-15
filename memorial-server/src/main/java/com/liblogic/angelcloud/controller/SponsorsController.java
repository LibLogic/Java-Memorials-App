package com.liblogic.angelcloud.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.liblogic.angelcloud.model.Burial;
import com.liblogic.angelcloud.model.Sponsors;
import com.liblogic.angelcloud.repository.BurialRepository;
import com.liblogic.angelcloud.repository.SponsorRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class SponsorsController {
	
    @Autowired
    private BurialRepository burialRepository;
	
    @Autowired
    private SponsorRepository sponsorRepository;
    
    @GetMapping("/sponsors")
    public Iterable<Sponsors> getAllSponsors() {
        return sponsorRepository.findAll();
    }
    
    @GetMapping("/sponsors/{sponsorId}")
    public void getSponsorById(@PathVariable Long sponsorId) {
        sponsorRepository.findById(sponsorId);
    }
    
    @GetMapping("/burials/{burialId}/sponsors")
    public Sponsors getSponsorsByBurial(@PathVariable Long burialId) {
        return sponsorRepository.findByBurialId(burialId);
    }
    
    @PutMapping("burials/{burialId}/addSponsor")
    public ResponseEntity<?> updateSponsor(@RequestBody Sponsors newSponsor, @PathVariable Long burialId) {
    	Optional<Burial> burial = burialRepository.findById(burialId);
    	newSponsor.setBurial(burial.get());
    	newSponsor.setId(burial.get().getId());
    	sponsorRepository.save(newSponsor);
    	return ResponseEntity.ok("resource saved");
    }
}