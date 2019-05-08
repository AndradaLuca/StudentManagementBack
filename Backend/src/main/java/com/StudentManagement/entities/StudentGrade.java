package com.StudentManagement.entities;

import javax.persistence.*;

@Entity
@Table (name="studentgrade")
public class StudentGrade {


    @Id
    @Column(name = "idstudentgrade")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idstudentgrade;

    @Column(name = "idstudent")
    private Integer idstudent;

    @Column(name = "idgradesubject")
    private Integer idgradesubject;

    public StudentGrade(Integer idstudent, Integer idgradesubject) {
        this.idstudent = idstudent;
        this.idgradesubject = idgradesubject;
    }

    public StudentGrade(){

    }

    public Integer getIdstudentgrade() {
        return idstudentgrade;
    }

    public void setIdstudentgrade(Integer idstudentgrade) {
        this.idstudentgrade = idstudentgrade;
    }

    public Integer getIdstudent() {
        return idstudent;
    }

    public void setIdstudent(Integer idstudent) {
        this.idstudent = idstudent;
    }

    public Integer getIdgradesubject() {
        return idgradesubject;
    }

    public void setIdgradesubject(Integer idgradesubject) {
        this.idgradesubject = idgradesubject;
    }
}
