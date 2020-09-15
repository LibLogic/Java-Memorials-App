package com.liblogic.angelcloud.controller;

import java.net.URI;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.liblogic.angelcloud.model.Sponsors;
import com.liblogic.angelcloud.model.Burial;
import com.liblogic.angelcloud.model.Donors;
import com.liblogic.angelcloud.repository.BurialRepository;
import com.liblogic.angelcloud.repository.DonorRepository;
import com.liblogic.angelcloud.repository.SponsorRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class DonorsController {
	
	
    @Autowired
    private BurialRepository burialRepository;
    
    @Autowired
    private SponsorRepository sponsorRepository;
    
    @Autowired
    private DonorRepository donorRepository;
    
    @GetMapping("/donors")
    public Iterable<Donors> getAllDonors() {
        return donorRepository.findAll();
    }
    
    @GetMapping("sponsors/{sponsorId}/donors")
    public Iterable<Donors> getDonorsBySponsorsId(@PathVariable Long sponsorId) {
        return donorRepository.findBySponsorsId(sponsorId);
    }
    
    @PostMapping("/burials/{burialId}/addDonor")
    public ResponseEntity<Object> addDonorDonor(@RequestBody Donors newDonor, @PathVariable Long burialId) {
    	Sponsors sponsors = sponsorRepository.findByBurialId(burialId);
	   	 if(sponsors == null){
			 Optional<Burial> burialTemp = burialRepository.findById(burialId);
			 Sponsors sponsorsTemp = new Sponsors(burialTemp.get());
			 sponsors = sponsorsTemp;
			 sponsorRepository.save(sponsorsTemp);
		}
    	newDonor.setSponsors(sponsors);
    	Donors donor = donorRepository.save(newDonor);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
        		.path("/{id}")
        		.buildAndExpand(donor.getId()).toUri();
        return ResponseEntity.created(location).build();
    }
    
    @DeleteMapping("/donors/{donorId}")
    public void deleteFullChildById(@PathVariable Long donorId) {
        donorRepository.deleteById(donorId);
    }
}
