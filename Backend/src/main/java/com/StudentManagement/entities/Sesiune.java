package com.StudentManagement.entities;

import javax.persistence.*;

@Entity
@Table(name="session")
public class Sesiune {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="idsession")
    Integer idsession;

    @Column(name="date")
    String date;

    @Column(name="idprof")
    Integer idprof;

    @Column(name = "sala")
    String sala;

    @Column(name = "materia")
    String materia;

    public Sesiune(String date, Integer idprof, String sala, String materia) {
        this.date = date;
        this.idprof = idprof;
        this.sala = sala;
        this.materia = materia;
    }

    public Sesiune() {}

    public Integer getIdsession() {
        return idsession;
    }

    public void setIdsession(Integer idsession) {
        this.idsession = idsession;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getIdprof() {
        return idprof;
    }

    public void setIdprof(Integer idprof) {
        this.idprof = idprof;
    }

    public String getSala() {
        return sala;
    }

    public void setSala(String sala) {
        this.sala = sala;
    }

    public String getMateria() {
        return materia;
    }

    public void setMateria(String materia) {
        this.materia = materia;
    }
}
