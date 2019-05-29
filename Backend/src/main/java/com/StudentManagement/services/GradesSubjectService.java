package com.StudentManagement.services;

import com.StudentManagement.entities.GradesSubject;
import com.StudentManagement.repositories.GradesSubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GradesSubjectService {
    @Autowired
    GradesSubjectRepository gradesSubjectRepository;

    public List<GradesSubject> list() {

        return gradesSubjectRepository.findAll();
    }


    public GradesSubject saveOrUpdate(GradesSubject gradesSubject) {

        return gradesSubjectRepository.save(gradesSubject);

    }

    public List<GradesSubject> findByGradeAndSubject(Integer grade, Integer subject) {
       return gradesSubjectRepository.findGradesSubjectByIdgradeAndAndIdsubject(grade, subject);
    }
}
