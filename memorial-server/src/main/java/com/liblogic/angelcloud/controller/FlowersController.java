package com.liblogic.angelcloud.controller;

import java.util.List;
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
import com.liblogic.angelcloud.model.Burial;
import com.liblogic.angelcloud.model.Flowers;
import com.liblogic.angelcloud.repository.BurialRepository;
import com.liblogic.angelcloud.repository.FlowerRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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
    
    @GetMapping("/flowers/{flowerId}")
    public Optional<Flowers> getFlowerById(@PathVariable Long flowerId) {
        return flowerRepository.findById(flowerId);
    }
    
    @GetMapping("/burials/{burialId}/flowers")
    public List<Flowers> getFlowersByBurial(@PathVariable Long burialId) {
        return flowerRepository.findByBurialId(burialId);
    }
    
    @PostMapping("burials/{burialId}/addFlower")
    public ResponseEntity<?> updateFlower(@RequestBody Flowers newFlower, @PathVariable Long burialId) {
    	Optional<Burial> burial = burialRepository.findById(burialId);
    	newFlower.setBurial(burial.get());
    	flowerRepository.save(newFlower);
    	return ResponseEntity.ok("resource saved");
    }
    
    @DeleteMapping("/flowers/{flowerId}")
    public void deleteFlowerById(@PathVariable Long flowerId) {
        flowerRepository.deleteById(flowerId);
    }
}
