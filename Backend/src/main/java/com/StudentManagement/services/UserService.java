package com.StudentManagement.services;

import com.StudentManagement.entities.User;
import com.StudentManagement.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }


    public User save(User user) {
        return userRepository.save(user);
    }


    /* search all users*/

    public List<User> findAll() {
        return userRepository.findAll();
    }


    /*delete an user*/
    public void delete(User user) {
        userRepository.delete(user);
    }

}
