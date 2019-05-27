package com.StudentManagement.repositories;

import com.StudentManagement.entities.Sesiune;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SesiuneRepository extends JpaRepository<Sesiune,Integer> {
}
