package com.StudentManagement.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="gradessubject")
public class GradesSubject {
    @Id
    @Column(name="idgradessubject")
    Integer idgradessubject;

    @Column(name="idgrade")
    Integer idgrade;

    @Column(name = "idsubject")
    Integer idsubject;

    public GradesSubject() {
    }

    public GradesSubject(Integer idgradesubject, Integer idgrade, Integer idsubject) {
        this.idgradessubject = idgradesubject;
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
