package com.liblogic.memorialApp.service;

import com.liblogic.memorialApp.dao.SubjectDAO;
import com.liblogic.memorialApp.model.Subject;

public class SubjectService {

    private final SubjectDAO subjectDAO;

    public SubjectService(SubjectDAO subjectDAO) {
        this.subjectDAO = subjectDAO;
    }

    public int insertSubject(Subject subject) {
        return subjectDAO.insertSubject(subject);
    }
}
