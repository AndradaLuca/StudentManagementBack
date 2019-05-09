package com.StudentManagement.controller;

import com.StudentManagement.entities.User;
import com.StudentManagement.services.UserService;
import com.sun.xml.internal.messaging.saaj.packaging.mime.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {


    @Autowired
    UserService userService;

    /* to save an user*/
    @PostMapping("/addOrUpdate")
    public User createUser(@Valid @RequestBody User user) {
        return userService.save(user);
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    /* to delete an user*/
    @PostMapping("/delete")
    public void deleteUser(@Valid @RequestBody User user) {
        userService.delete(user);
    }

    /*find user by email and password*/

    @PostMapping("/findByEmail&Password")
    public User findUserByEmailAndPAssword(@Valid @RequestBody User user) {

        return userService.findByEmailAndPassword(user.getEmail(),user.getPassword());
    }









}
