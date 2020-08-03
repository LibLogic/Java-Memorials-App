package com.liblogic.memorialApp.service;

import com.liblogic.memorialApp.dao.SubjectDao;
import com.liblogic.memorialApp.model.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class SubjectService {

    private final SubjectDao subjectDao;

    @Autowired
    public SubjectService(@Qualifier("fakeDao") SubjectDao subjectDao) {
        this.subjectDao = subjectDao;
    }

    public int addSubject(Subject subject) {
        return subjectDao.insertSubject(subject);
    }
}
