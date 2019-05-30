package com.StudentManagement.controller;

import com.StudentManagement.entities.Grup;
import com.StudentManagement.entities.User;
import com.StudentManagement.services.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins ="http://localhost:3001")
@RequestMapping("/grup")
public class GroupController {

    @Autowired
    GroupService groupService;


    @GetMapping("/all")
    public List<Grup> getAll() { return groupService.list(); }

    @GetMapping("/groupById")
    public Optional<Grup> getGroupById(@Valid @RequestParam Integer id) {
        return groupService.listById(id);
    }

    @PostMapping("/addOrUpdate")
    public Grup createUser(@Valid @RequestBody Grup grup) {
        return groupService.save(grup);
    }
}
