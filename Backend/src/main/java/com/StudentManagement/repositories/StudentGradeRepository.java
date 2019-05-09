package com.StudentManagement.repositories;

import com.StudentManagement.entities.StudentGrade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentGradeRepository extends JpaRepository<StudentGrade,Integer> {
}
