package com.StudentManagement.services;


import com.StudentManagement.entities.Profesor;
import com.StudentManagement.repositories.ProfesorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfesorService {


    @Autowired
    ProfesorRepository profesorRepository;

    public Optional<Profesor> findById(Integer id){
        return profesorRepository.findById(id);
    }

    public Profesor findByUsername(String username){return profesorRepository.findByUser(username);}

    //create a new student
    public Profesor save(Profesor profesor) {
        return profesorRepository.save(profesor);
    }

    //delete a student

    public void delete (Profesor profesor){
        profesorRepository.delete(profesor);
    }

    //find all student
    public List<Profesor> findAll()
    {
        return profesorRepository.findAll();
    }
}
