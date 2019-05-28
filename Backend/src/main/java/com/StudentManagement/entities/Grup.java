package com.StudentManagement.entities;

import javax.persistence.*;

@Entity
@Table(name="grupa")
public class Grup {

    @Id
    @Column(name="idgroup")
    Integer idgroup;

    @Column(name="denumire")
    String denumire;

    public Grup(String denumire) {
        this.denumire = denumire;
    }

    public Grup(){}

    public Integer getIdgroup() {
        return idgroup;
    }

    public void setIdgroup(Integer idgroup) {
        this.idgroup = idgroup;
    }

    public String getDenumire() {
        return denumire;
    }

    public void setDenumire(String denumire) {
        this.denumire = denumire;
    }
}
