package com.StudentManagement.controller;

import com.StudentManagement.entities.Profesor;
import com.StudentManagement.entities.Student;
import com.StudentManagement.services.ProfesorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins ="http://localhost:3001")
@RequestMapping("/profesor")
public class ProfesorController {

    @Autowired
    ProfesorService profesorService;


    @PostMapping("/addOrUpdate")
    public Profesor createProfesor(@Valid @RequestBody Profesor profesor) {
        return profesorService.save(profesor);
    }

    @GetMapping("/all")
    public List<Profesor> getAll() {
        return profesorService.findAll();
    }


    @PostMapping("/delete")
    public void deleteProfesor(@Valid @RequestBody Profesor profesor) {
        profesorService.delete(profesor);
    }

}
