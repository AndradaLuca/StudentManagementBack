package com.StudentManagement.entities;

import javax.persistence.*;

@Entity
@Table(name="gradessubject")
public class GradesSubject {
    @Id
    @Column(name="idgradessubject")
    @GeneratedValue(strategy=GenerationType.AUTO)
    Integer idgradessubject;

    @Column(name="idgrade")
    Integer idgrade;

    @Column(name = "idsubject")
    Integer idsubject;

    public GradesSubject() {
    }


    public GradesSubject(Integer idgrade, Integer idsubject) {
        this.idgrade = idgrade;
        this.idsubject = idsubject;
    }

    public Integer getIdgradesubject() {
        return idgradessubject;
    }

    public void setIdgradesubject(Integer idgradesubject) {
        this.idgradessubject = idgradesubject;
    }

    public Integer getIdgrade() {
        return idgrade;
    }

    public void setIdgrade(Integer idgrade) {
        this.idgrade = idgrade;
    }

    public Integer getIdsubject() {
        return idsubject;
    }

    public void setIdsubject(Integer idsubject) {
        this.idsubject = idsubject;
    }

    @Override
    public String toString() {
        return "GradesSubject{" +
                "idgradesubject=" + idgradessubject +
                ", idgrade=" + idgrade +
                ", idsubject=" + idsubject +
                '}';
    }
}
