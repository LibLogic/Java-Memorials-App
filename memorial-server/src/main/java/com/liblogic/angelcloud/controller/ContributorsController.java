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
import com.liblogic.angelcloud.model.Contributors;
import com.liblogic.angelcloud.repository.ContributorRepository;
import com.liblogic.angelcloud.repository.DonorRepository;

@RestController
public class ContributorsController {
	
    @Autowired
    private DonorRepository donorRepository;
    
    @Autowired
    private ContributorRepository contributorRepository;
    
    @GetMapping("/contributors")
    public Iterable<Contributors> getAllDonorIndividuals() {
        return contributorRepository.findAll();
    }
    
    @GetMapping("donors/{donorId}/contributors")
    public Iterable<Contributors> getDonorIndividualByDonorsId(@PathVariable Long donorId) {
        return contributorRepository.findByDonorsId(donorId);
    }
    
    @PostMapping("/burials/{burialId}/addContributor")
    public ResponseEntity<Object> addDonorContributor(@RequestBody Contributors newDonorContributor, @PathVariable Long burialId) {
    	Donors donors = donorRepository.findByBurialId(burialId);
    	newDonorContributor.setDonors(donors);
    	Contributors donorContributor = contributorRepository.save(newDonorContributor);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
        		.path("/{id}")
        		.buildAndExpand(donorContributor.getId()).toUri();
        return ResponseEntity.created(location).build();
    }
}
