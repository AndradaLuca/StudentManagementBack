package com.StudentManagement.controller;

import com.StudentManagement.entities.Group;
import com.StudentManagement.entities.Student;
import com.StudentManagement.services.GroupServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/group")
public class GroupController {
    @Autowired
    GroupServices groupServices;

    /* to save an student*/
    @PostMapping("/addOrUpdate")
    public Group createUser(@Valid @RequestBody Group group) {
        return groupServices.save(group);
    }

    @GetMapping("/all")
    public List<Group> getAll() {
        return groupServices.findAll();
    }

    /* to delete an student*/
    @PostMapping("/delete")
    public void deleteUser(@Valid @RequestBody Group group) {
        groupServices.delete(group);
    }
}
