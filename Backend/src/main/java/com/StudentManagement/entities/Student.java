package com.StudentManagement.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Table
@Entity(name = "Student")
public class Student {

    @Id
    @Column(name = "idstudent")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idStudent;

    @Column(name = "email")
    private String email;
    @Column(name = "cnp")
    private String CNP;
    @Column(name = "idgroup")
    private int idgroup;
    @Column(name = "anstudiu")
    private String anstudiu;
    @Column(name = "telefon")
    private String telefon;

    public Student() {
    }

    public Student(String email, String CNP, int idgroup, String anstudiu, String telefon) {
        this.email = email;
        this.CNP = CNP;
        this.idgroup = idgroup;
        this.anstudiu = anstudiu;
        this.telefon = telefon;
    }

    public Integer getIdStudent() {
        return idStudent;
    }

    public void setIdStudent(Integer idStudent) {
        this.idStudent = idStudent;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCNP() {
        return CNP;
    }

    public void setCNP(String CNP) {
        this.CNP = CNP;
    }

    public int getIdgroup() {
        return idgroup;
    }

    public void setIdgroup(int idgroup) {
        this.idgroup = idgroup;
    }

    public String getAnstudiu() {
        return anstudiu;
    }

    public void setAnstudiu(String anstudiu) {
        this.anstudiu = anstudiu;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    @Override
    public String toString() {
        return "Student{" +
                "idStudent=" + idStudent +
                ", email='" + email + '\'' +
                ", CNP='" + CNP + '\'' +
                ", idgroup=" + idgroup +
                ", anstudiu='" + anstudiu + '\'' +
                ", telefon='" + telefon + '\'' +
                '}';
    }
}
