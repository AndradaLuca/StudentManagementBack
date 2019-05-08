package com.StudentManagement.entities;

import javax.persistence.*;

@Table
@Entity(name = "Grupa")
public class Group {

    @Id
    @Column(name = "idgroup")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idgroup;

    @Column(name = "denumire")
    private String denumire;

    public Group(String denumire) {
        this.denumire = denumire;
    }

    public Group() {
    }

    public Integer getIdGroup() {
        return idgroup;
    }

    public void setIdGroup(Integer idGroup) {
        this.idgroup = idGroup;
    }

    public String getDenumire() {
        return denumire;
    }

    public void setDenumire(String denumire) {
        this.denumire = denumire;
    }

    @Override
    public String toString() {
        return "Group{" +
                "idGroup=" + idgroup +
                ", denumire='" + denumire + '\'' +
                '}';
    }
}
