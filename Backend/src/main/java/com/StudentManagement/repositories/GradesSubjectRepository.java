package com.StudentManagement.repositories;

import com.StudentManagement.entities.GradesSubject;
import com.StudentManagement.entities.Grup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GradesSubjectRepository extends JpaRepository<GradesSubject, Integer> {

    List<GradesSubject> findGradesSubjectByIdgradeAndAndIdsubject(Integer idGrade, Integer idSubject );
}
