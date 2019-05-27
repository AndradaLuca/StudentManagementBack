package com.StudentManagement.services;

import com.StudentManagement.entities.Sesiune;
import com.StudentManagement.repositories.SesiuneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SesiuneService {

    @Autowired
    SesiuneRepository sesiuneRepository;

    //create a new student
    public Sesiune save(Sesiune sesiune) {
        return sesiuneRepository.save(sesiune);
    }

    //delete a student

    public void delete (Sesiune sesiune){
        sesiuneRepository.delete(sesiune);
    }

    //find all student
    public List<Sesiune> findAll()
    {
        return sesiuneRepository.findAll();
    }
}
