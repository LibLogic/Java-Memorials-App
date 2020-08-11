package com.liblogic.memorialApp.dao;

import com.liblogic.memorialApp.model.Subject;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


public interface SubjectDao {
    int insertSubject(UUID id, Subject subject);

    default int insertSubject(Subject subject) {
        UUID id = UUID.randomUUID();
        return insertSubject(id, subject);
    }

    List<Subject> selectAllSubjects();

    Optional<Subject> selectSubjectById(UUID id);

    int deleteSubjectById(UUID id);

    int updateSubjectById(UUID id, Subject subject);


}
