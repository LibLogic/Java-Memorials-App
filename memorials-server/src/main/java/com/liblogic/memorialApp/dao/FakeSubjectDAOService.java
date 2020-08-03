package com.liblogic.memorialApp.dao;

import com.liblogic.memorialApp.model.Subject;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository("fakeDao")
public class FakeSubjectDAOService implements SubjectDao {

    private static List<Subject> DB = new ArrayList<>();

    @Override
    public int insertSubject(UUID id, Subject subject) {
        DB.add(new Subject(id, subject.getFirstName()));
        return 1;
    }
}
