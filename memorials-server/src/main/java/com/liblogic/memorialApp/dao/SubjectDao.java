package com.liblogic.memorialApp.dao;

import com.liblogic.memorialApp.model.Subject;

import java.util.UUID;


public interface SubjectDao {
    int insertSubject(UUID id, Subject subject);

    default int insertSubject(Subject subject) {
        UUID id = UUID.randomUUID();
        return insertSubject(id, subject);
    }
}
