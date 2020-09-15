package com.liblogic.angelcloud.controller;

import java.util.Optional;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import com.liblogic.angelcloud.model.Burial;
import com.liblogic.angelcloud.model.Parents;
import com.liblogic.angelcloud.repository.BurialRepository;
import com.liblogic.angelcloud.repository.ParentRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ParentsController {
	
    @Autowired
    private BurialRepository burialRepository;
	
    @Autowired
    private ParentRepository parentRepository;
    
    @GetMapping("/parents")
    public Iterable<Parents> getAllParents() {
        return parentRepository.findAll();
    }
    
    @GetMapping("/parents/{parentId}")
    public Optional<Parents> getParentById(@PathVariable Long parentId) {
        return parentRepository.findById(parentId);
    }
    
    @GetMapping("/burials/{burialId}/parents")
    public Parents getParentsByBurial(@PathVariable Long burialId) {
        return parentRepository.findByBurialId(burialId);
    }
    
    @PatchMapping("burials/{burialId}/addParent")
    public ResponseEntity<?> updateParent(@RequestBody Parents newParent, @PathVariable Long burialId) {
    	Optional<Burial> burial = burialRepository.findById(burialId);

    	Parents parent = parentRepository.findByBurialId(burialId);
    	if(parent == null) {
    		parent = newParent;
    	}
    	if(newParent.getMother() != null) {
    		parent.setMother(newParent.getMother());
    	}
    	if(newParent.getFather() != null) {
    		parent.setFather(newParent.getFather());
    	}
    	newParent = parent;
    	newParent.setBurial(burial.get());
    	newParent.setId(burial.get().getId());
    	parentRepository.save(newParent);
    	return ResponseEntity.ok("resource saved");
    }  
}




