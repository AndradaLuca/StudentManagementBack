package com.StudentManagement.repositories;

import com.StudentManagement.dto.SubjectStudentGrade;
import com.StudentManagement.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
    @Query("select new com.StudentManagement.dto.SubjectStudentGrade(g.grade, m.name) from Student s JOIN StudentGrade sg on s.idStudent = sg.idstudent JOIN GradesSubject gs on sg.idstudentgrade = gs.idgradessubject JOIN Grades g on gs.idgrade = g.idgrades join Materie m on gs.idsubject=m.idsubject WHERE s.email = :mail")
    List<SubjectStudentGrade> getStudentGradeSubject(String mail);

    Student findByIdStudent(Integer id);

}
