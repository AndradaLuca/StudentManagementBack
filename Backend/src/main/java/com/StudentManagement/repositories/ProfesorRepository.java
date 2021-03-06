package com.StudentManagement.repositories;

import com.StudentManagement.entities.Profesor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProfesorRepository extends JpaRepository<Profesor,Integer> {
    @Override
    Optional<Profesor> findById(Integer integer);

    Profesor findByUser(String user);
}
