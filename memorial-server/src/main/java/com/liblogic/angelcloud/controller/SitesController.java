package com.liblogic.angelcloud.controller;

import java.net.URI;
import java.util.Optional;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.liblogic.angelcloud.model.Site;
import com.liblogic.angelcloud.repository.SiteRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class SitesController {

    @Autowired
    private SiteRepository siteRepository;

    @GetMapping("/sites")
    public Iterable<Site> getAllSites() {
        return siteRepository.findAll();
    }

    @GetMapping("/sites/{id}")
    public Optional<Site> getSiteById(@PathVariable Long id) {
        return siteRepository.findById(id);
    }

    @PostMapping("/addSite")
    public ResponseEntity<Void> addSite(@RequestBody Site newSite) {
        Site site = siteRepository.save(newSite);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(site.getId()).toUri();
        return ResponseEntity.created(location).build();
    }

    @DeleteMapping("/sites/{id}")
    public void deleteSiteById(@PathVariable Long id) {
        siteRepository.deleteById(id);
    }
}
