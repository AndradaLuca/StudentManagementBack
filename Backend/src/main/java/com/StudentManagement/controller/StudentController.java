package com.StudentManagement.controller;

import com.StudentManagement.dto.ProfPageDto;
import com.StudentManagement.dto.SubjectStudentGrade;
import com.StudentManagement.entities.Student;
import com.StudentManagement.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/student")
public class StudentController {
    @Autowired
    StudentService studentService;


    /* to save an student*/
    @PostMapping("/addOrUpdate")
    public Student createUser(@Valid @RequestBody Student student) {
        return studentService.save(student);
    }

    @GetMapping("/all")
    public List<Student> getAll() {
        return studentService.findAll();
    }

    /* to delete an student*/
    @PostMapping("/delete")
    public void deleteUser(@Valid @RequestBody Student student) {
        studentService.delete(student);
    }

    @PostMapping("/grades")
    public List<SubjectStudentGrade> getStudentGrades(@Valid @RequestBody String email){
        System.out.println("ASFDDDDDDDDDDDDDDDDDDDD"+ " " + email);
        System.out.println(studentService.getStudentGrades(email).toString());
        return studentService.getStudentGrades(email);}

     @GetMapping("/studentsBySubject")
    public List<ProfPageDto> getStudentsBySubject(@RequestParam("prof") String prof)
     {
         return studentService.getStudentsByProf(prof);
     }

}
