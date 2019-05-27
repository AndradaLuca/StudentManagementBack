package com.StudentManagement.services;


import com.StudentManagement.entities.Profesor;
import com.StudentManagement.repositories.ProfesorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfesorService {


    @Autowired
    ProfesorRepository profesorRepository;

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
