package com.StudentManagement.services;

import com.StudentManagement.entities.Materie;
import com.StudentManagement.repositories.MaterieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaterieServices {

    @Autowired
    MaterieRepository materieRepository;

    public List<Materie> list() {

        return materieRepository.findAll();
    }


    public void delete(Materie materie) {
         materieRepository.delete(materie);
    }


    public Materie saveOrUpdate(Materie materie) {
        System.out.println(materie);
         return materieRepository.save(materie);

    }

}
