package com.StudentManagement.services;

import com.StudentManagement.dto.ProfPageDto;
import com.StudentManagement.dto.SubjectStudentGrade;
import com.StudentManagement.entities.Student;
import com.StudentManagement.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    //create a new student
    public Student save(Student student) {
        return studentRepository.save(student);
    }

    //delete a student

    public void delete (Student student){
        studentRepository.delete(student);
    }

    //find all student
    public List<Student> findAll()
    {
        return studentRepository.findAll();
    }

    public List<SubjectStudentGrade> getStudentGrades( String email)
    {
        return studentRepository.getStudentGradeSubject(email);
    }

    public Student findByIdStudent(Integer id)
    {
       return studentRepository.findByIdStudent(id);
    }

    public List<ProfPageDto> getStudentsByProf(String prof){return studentRepository.getProfStudent(prof);}
}
