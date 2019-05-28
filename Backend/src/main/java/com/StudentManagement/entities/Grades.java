package com.StudentManagement.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="grades")
public class Grades {
    @Id
    @Column(name="idgrades")
    Integer idgrades;

    @Column(name="grade")
    String grade;

    public Grades() {
    }

    public Grades(Integer idgrade, String grade) {
        this.idgrades = idgrade;
        this.grade = grade;
    }

    public Integer getIdgrade() {
        return idgrades;
    }

    public void setIdgrade(Integer idgrade) {
        this.idgrades = idgrade;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "Grades{" +
                "idgrade=" + idgrades +
                ", grade='" + grade + '\'' +
                '}';
    }
}
