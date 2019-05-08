package com.StudentManagement.controller;

import com.StudentManagement.entities.StudentGrade;
import com.StudentManagement.services.StudentGradeService;
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


    /* to save an student*/
    @PostMapping("/add")
    public StudentGrade createUser(@Valid @RequestBody StudentGrade studentGrade) {
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
