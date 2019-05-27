package com.StudentManagement.controller;

import com.StudentManagement.entities.Profesor;
import com.StudentManagement.entities.Sesiune;
import com.StudentManagement.repositories.MailRepository;
import com.StudentManagement.repositories.ProfesorRepository;
import com.StudentManagement.services.ProfesorService;
import com.StudentManagement.services.SesiuneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/sesiune")
public class SesiuneController {

    @Autowired
    SesiuneService sesiuneService;

    @Autowired
    ProfesorService profesorService;

    /* to save an student*/
    @PostMapping("/addOrUpdate")
    public Sesiune createUser(@Valid @RequestBody Sesiune sesiune) {
        Integer id = sesiune.getIdprof();
        Optional<Profesor> profesor = profesorService.findById(id);
        MailRepository.mail(sesiune.getDate(),profesor.get().getUser());
        return sesiuneService.save(sesiune);
    }

    @GetMapping("/all")
    public List<Sesiune> getAll() {
        return sesiuneService.findAll();
    }

    /* to delete an student*/
    @PostMapping("/delete")
    public void deleteUser(@Valid @RequestBody Sesiune sesiune) {
        sesiuneService.delete(sesiune);
    }
}
