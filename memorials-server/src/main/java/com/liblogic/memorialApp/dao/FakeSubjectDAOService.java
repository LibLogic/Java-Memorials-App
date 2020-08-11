package com.liblogic.memorialApp.dao;

import com.liblogic.memorialApp.model.Subject;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("fakeDao")
public class FakeSubjectDAOService implements SubjectDao {

    private static List<Subject> DB = new ArrayList<>();

    @Override
    public int insertSubject(UUID id, Subject subject) {
        DB.add(new Subject(id, subject.getFirstName(), subject.getMiddleName(), subject.getLastName(), subject.getMaidenName(), subject.getBirthYear(), subject.getDeathYear(), subject.getCity(), subject.getState(), subject.getCounty(), subject.getCountry(), subject.getCemeteryName()));
        return 1;
    }

    @Override
    public List<Subject> selectAllSubjects() {
        return DB;
    }

    @Override
    public Optional<Subject> selectSubjectById(UUID id) {
        return DB.stream()
                .filter(person -> person.getId().equals(id))
                .findFirst();
    }

    @Override
    public int deleteSubjectById(UUID id) {
        Optional<Subject> subjectMaybe = selectSubjectById(id);
        if(subjectMaybe.isEmpty()) {
            return 0;
        }
        DB.remove(subjectMaybe.get());
        return 1;
    }

    @Override
    public int updateSubjectById(UUID id, Subject update) {
        return selectSubjectById(id)
                .map(subject -> {
                    int indexOfSubjectToUpdate = DB.indexOf(subject);
                    if (indexOfSubjectToUpdate >= 0) {
                        DB.set(indexOfSubjectToUpdate, new Subject(id, update.getFirstName(),  update.getMiddleName(),  update.getLastName(),  update.getMaidenName(),  update.getBirthYear(),  update.getDeathYear(),  update.getCity(),  update.getState(),  update.getCounty(), update.getCountry(), update.getCemeteryName()));
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }
}
