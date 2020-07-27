package com.liblogic.memorialApp.api;

import com.liblogic.memorialApp.model.Subject;
import com.liblogic.memorialApp.service.SubjectService;

public class SubjectController {

    private final SubjectService subjectService;

    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    public void insertSubject(Subject subject) {
        subjectService.insertSubject(subject)
    }
}
