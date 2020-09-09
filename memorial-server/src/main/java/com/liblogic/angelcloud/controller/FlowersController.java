package com.liblogic.angelcloud.controller;

import org.springframework.web.bind.annotation.RestController;
import java.net.URI;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.liblogic.angelcloud.model.Burial;
import com.liblogic.angelcloud.model.Flowers;
import com.liblogic.angelcloud.repository.BurialRepository;
import com.liblogic.angelcloud.repository.FlowerRepository;

@RestController
public class FlowersController {
	
    @Autowired
    private BurialRepository burialRepository;

    @Autowired
    private FlowerRepository flowerRepository;
    
    @GetMapping("/flowers")
    public Iterable<Flowers> getAllFlowers() {
        return flowerRepository.findAll();
    }
    
    @PostMapping("/burials/{burialId}/flowers")
    public ResponseEntity<Object> addFlowers(@RequestBody Flowers newFlower, @PathVariable Long burialId) {
    	Optional<Burial> burial = burialRepository.findById(burialId);
		newFlower.setBurial(burial.get());		
    	Flowers flower = flowerRepository.save(newFlower);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
        		.path("/{id}")
        		.buildAndExpand(flower.getId()).toUri();
        return ResponseEntity.created(location).build();
    } 
}
