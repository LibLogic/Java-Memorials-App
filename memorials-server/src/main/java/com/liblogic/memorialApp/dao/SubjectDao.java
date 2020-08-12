package com.liblogic.memorialApp.dao;

import com.liblogic.memorialApp.model.Subject;

import java.util.List;
import java.util.Optional;

public interface SubjectDao {
    int insertSubject(Long id, Subject subject);

//    default int insertSubject(Subject subject) {
//        UUID id = UUID.randomUUID();
//        return insertSubject(id, subject);
//    }

    List<Subject> selectAllSubjects();

    Optional<Subject> selectSubjectById(Long id);

    int deleteSubjectById(Long id);

    int updateSubjectById(Long id, Subject subject);


}
