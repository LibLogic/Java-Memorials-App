package com.liblogic.angelcloud.controller;

import java.util.Optional;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.liblogic.angelcloud.model.Burial;
import com.liblogic.angelcloud.model.Parents;
import com.liblogic.angelcloud.repository.BurialRepository;
import com.liblogic.angelcloud.repository.ParentRepository;

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
    
    @GetMapping("/burials/{burialId}/parents")
    public Parents getParentsByBurial(@PathVariable Long burialId) {
        return parentRepository.findByBurialId(burialId);
    }
    
    @PutMapping("burials/{burialId}/parents/{parentId}")
    public ResponseEntity<?> updateParent(@RequestBody Parents newParent, @PathVariable Long burialId, @PathVariable Long parentId) {
    	Optional<Burial> burial = burialRepository.findById(burialId);
    	newParent.setBurial(burial.get());
    	newParent.setId(burial.get().getId());
    	parentRepository.save(newParent);
    	return ResponseEntity.ok("resource saved");
    }
    
}




