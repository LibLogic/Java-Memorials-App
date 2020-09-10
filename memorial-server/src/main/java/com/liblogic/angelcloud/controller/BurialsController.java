package com.liblogic.angelcloud.controller;

import java.net.URI;
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
import com.liblogic.angelcloud.model.Burial;
import com.liblogic.angelcloud.model.Site;
import com.liblogic.angelcloud.repository.BurialRepository;
import com.liblogic.angelcloud.repository.SiteRepository;

@RestController
public class BurialsController {

    @Autowired
    private SiteRepository siteRepository;
    
    @Autowired
    private BurialRepository burialRepository;
    
    @GetMapping("/burials")
    public Iterable<Burial> getAllBurials() {
        return burialRepository.findAll();
    }
    
    @GetMapping("/burials/{burialId}")
    public Optional<Burial> getBurialById(@PathVariable Long burialId) {
        return burialRepository.findById(burialId);
    }
    
    @GetMapping("/sites/{siteId}/burials")
    public Iterable<Burial> getBurialsBySite(@PathVariable Long siteId) {
        return burialRepository.findBySiteId(siteId);
    }

    @PostMapping("/sites/{siteId}/addBurial")
    public ResponseEntity<Object> addBurial(@RequestBody Burial newBurial, @PathVariable Long siteId) {
    	Optional<Site> site = siteRepository.findById(siteId);
		newBurial.setSite(site.get());
    	Burial burial = burialRepository.save(newBurial);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
        		.path("/{id}")
        		.buildAndExpand(burial.getId()).toUri();
        return ResponseEntity.created(location).build();
    }

    @DeleteMapping("/burials/{burialId}")
    public void deleteBurialById(@PathVariable Long burialId) {
        burialRepository.deleteById(burialId);
    }
}