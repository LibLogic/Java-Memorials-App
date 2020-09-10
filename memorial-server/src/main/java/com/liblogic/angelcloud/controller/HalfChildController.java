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
import com.liblogic.angelcloud.model.HalfChildren;
import com.liblogic.angelcloud.model.Parents;
import com.liblogic.angelcloud.repository.HalfChildRepository;
import com.liblogic.angelcloud.repository.ParentRepository;

@RestController
public class HalfChildController {

    @Autowired
    private ParentRepository parentRepository;
    
    @Autowired
    private HalfChildRepository halfChildRepository;
    
    @GetMapping("/halfChildren")
    public Iterable<HalfChildren> getAllHalfChildren() {
        return halfChildRepository.findAll();
    }
    
    @GetMapping("parents/{parentId}/halfChildren")
    public Iterable<HalfChildren> getHalfChildrenByParentsId(@PathVariable Long parentId) {
        return halfChildRepository.findByParentsId(parentId);
    }
    
    @PostMapping("/burials/{burialId}/addHalfChild")
    public ResponseEntity<Object> addHalfChild(@RequestBody HalfChildren newHalfChild, @PathVariable Long burialId) {
    	Parents parent = parentRepository.findByBurialId(burialId);
    	newHalfChild.setParents(parent);
    	HalfChildren halfChild = halfChildRepository.save(newHalfChild);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
        		.path("/{id}")
        		.buildAndExpand(halfChild.getId()).toUri();
        return ResponseEntity.created(location).build();
    }
}
