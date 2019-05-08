package com.StudentManagement.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="subject")
public class Materie{

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="idsubject")
    Integer idsubject;

    @Column(name="name")
    String name;

    @Column(name="credits")
    Integer credits;

    public Materie(Integer idsubject, String name, Integer credits) {
        this.idsubject = idsubject;
        this.name = name;
        this.credits = credits;
    }

    public Materie() {

    }

    public Integer getIdsubject() {
        return idsubject;
    }

    public void setIdsubject(Integer idsubject) {
        this.idsubject = idsubject;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCredits() {
        return credits;
    }

    public void setCredits(Integer credits) {
        this.credits = credits;
    }

    @Override
    public String toString() {
        return "Materie{" +
                "idsubject=" + idsubject +
                ", name='" + name + '\'' +
                ", credits=" + credits +
                '}';
    }
}

