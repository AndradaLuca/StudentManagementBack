package com.StudentManagement.repositories;

import com.StudentManagement.entities.Materie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface MaterieRepository extends JpaRepository<Materie,Integer> {

}
