package com.StudentManagement.repositories;

import com.StudentManagement.dto.ProfPageDto;
import com.StudentManagement.dto.SubjectStudentGrade;
import com.StudentManagement.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
    @Query("select new com.StudentManagement.dto.SubjectStudentGrade(m.name,g.grade) from Student s JOIN StudentGrade sg on s.idStudent = sg.idstudent JOIN GradesSubject gs on sg.idstudentgrade = gs.idgradessubject JOIN Grades g on gs.idgrade = g.idgrades join Materie m on gs.idsubject=m.idsubject WHERE s.email = :mail")
    List<SubjectStudentGrade> getStudentGradeSubject(String mail);

    Student findByIdStudent(Integer id);

    @Query("select new com.StudentManagement.dto.ProfPageDto(s.email,m.name,g.grade) from Student s JOIN StudentGrade sg on s.idStudent = sg.idstudent JOIN GradesSubject gs on sg.idstudentgrade = gs.idgradessubject JOIN Grades g on gs.idgrade = g.idgrades join Profesor p on p.subject = gs.idsubject JOIN Materie m on m.idsubject = p.subject WHERE p.user = :profesor")
    List<ProfPageDto> getProfStudent(String profesor);

    Student findByEmail(String email);

}
