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
import com.liblogic.angelcloud.model.Burial;
import com.liblogic.angelcloud.model.FullChildren;
import com.liblogic.angelcloud.model.Parents;
import com.liblogic.angelcloud.repository.BurialRepository;
import com.liblogic.angelcloud.repository.FullChildRepository;
import com.liblogic.angelcloud.repository.ParentRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class FullChildController {
	
    @Autowired
    private BurialRepository burialRepository;

    @Autowired
    private ParentRepository parentRepository;
    
    @Autowired
    private FullChildRepository fullChildRepository;
    
    @GetMapping("/fullChildren")
    public Iterable<FullChildren> getAllFullChildren() {
        return fullChildRepository.findAll();
    }
    
    @GetMapping("parents/{parentId}/fullChildren")
    public Iterable<FullChildren> getFullChildrenByParentsId(@PathVariable Long parentId) {
        return fullChildRepository.findByParentsId(parentId);
    }
    
    @PostMapping("/burials/{burialId}/addFullChild")
    public ResponseEntity<Object> addFullChild(@RequestBody FullChildren newFullChild, @PathVariable Long burialId) {
    	Parents parent = parentRepository.findByBurialId(burialId);
		if(parent == null){
			 Optional<Burial> burialTemp = burialRepository.findById(burialId);
			 Parents parentTemp = new Parents(burialTemp.get().getId(), burialTemp.get());
			 parent = parentTemp;
			 parentRepository.save(parentTemp);
		}
    	newFullChild.setParents(parent);
    	FullChildren fullChild = fullChildRepository.save(newFullChild);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
        		.path("/{id}")
        		.buildAndExpand(fullChild.getId()).toUri();
        return ResponseEntity.created(location).build();
    }
    
    @DeleteMapping("/fullChildren/{childId}")
    public void deleteFullChildById(@PathVariable Long childId) {
        fullChildRepository.deleteById(childId);
    }
}
