package com.StudentManagement.services;

import com.StudentManagement.entities.StudentGrade;
import com.StudentManagement.repositories.StudentGradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentGradeService {

    @Autowired
    StudentGradeRepository studentGradeRepository;

    public List<StudentGrade> findAll() {

        return studentGradeRepository.findAll();
    }


    public void delete(StudentGrade studentGrade) {
        studentGradeRepository.delete(studentGrade);
    }


    public StudentGrade save(StudentGrade studentGrade) {
        System.out.println(studentGrade);
        return studentGradeRepository.save(studentGrade);

    }
}
