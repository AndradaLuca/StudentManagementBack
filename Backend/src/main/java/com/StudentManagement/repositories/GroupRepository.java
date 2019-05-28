package com.StudentManagement.repositories;

import com.StudentManagement.entities.Grup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GroupRepository extends JpaRepository<Grup, Integer> {

    @Override
    Optional<Grup> findById(Integer integer);
}
