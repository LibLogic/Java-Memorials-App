package com.liblogic.memorialApp.api;

import com.liblogic.memorialApp.model.Subject;
import com.liblogic.memorialApp.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/subject")
@RestController
public class SubjectController {

    private final SubjectService subjectService;

    @Autowired
    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @PostMapping
    public void addSubject(@Valid @NonNull @RequestBody Subject subject) {
        subjectService.addSubject(subject);
    }

    @GetMapping
    public List<Subject> getAllSubjects() {
        return subjectService.getAllSubjects();
    }

    @GetMapping(path = "{id}")
    public Subject getSubjectById(@PathVariable("id") Long id) {
        return subjectService.selectSubjectById(id)
                .orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public void deleteSubjectById(@PathVariable("id") Long id) {
        subjectService.deleteSubject(id);
    }

    @PutMapping(path = "{id}")
    public void updateSubject(@PathVariable("id") Long id, @Valid @NonNull @RequestBody Subject subjectToUpdate) {
        subjectService.updateSubject(id, subjectToUpdate);
    }
}
