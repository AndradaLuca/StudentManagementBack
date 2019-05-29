package com.StudentManagement.controller;

import com.StudentManagement.entities.Student;
import com.StudentManagement.entities.StudentGrade;
import com.StudentManagement.repositories.MailRepository;
import com.StudentManagement.services.StudentGradeService;
import com.StudentManagement.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/studentGrade")
public class StudentGradeController {

    @Autowired
    StudentGradeService studentGradeService;
    @Autowired
    StudentService studentService;


    /* to save an student*/
    @PostMapping("/add")
    public StudentGrade createUser(@Valid @RequestBody StudentGrade studentGrade) {
        Student student = studentService.findByIdStudent(studentGrade.getIdstudent());
        String subject = "Modificare Nota";
        String txt = "Dear Stud," + "\n\n O nota a fost modificata/adaugata";
        MailRepository.mail("andradaa.luca@gmail.com",subject, txt);
        return studentGradeService.save(studentGrade);
    }

    @GetMapping("/all")
    public List<StudentGrade> getAll() {
        return studentGradeService.findAll();
    }

    /* to delete an student*/
    @PostMapping("/delete")
    public void deleteUser(@Valid @RequestBody StudentGrade studentGrade) {
        studentGradeService.delete(studentGrade);
    }

}
