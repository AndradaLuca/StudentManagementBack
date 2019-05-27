package com.StudentManagement.controller;

import com.StudentManagement.entities.Sesiune;
import com.StudentManagement.services.SesiuneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/sesiune")
public class SesiuneController {

    @Autowired
    SesiuneService sesiuneService;

    /* to save an student*/
    @PostMapping("/addOrUpdate")
    public Sesiune createUser(@Valid @RequestBody Sesiune sesiune) {
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
