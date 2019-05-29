package com.StudentManagement.entities;

import javax.persistence.*;

@Entity
@Table(name="proffesor")
public class Profesor {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="idprof")
    Integer idprof;

    @Column(name="user")
    String user;

    @Column(name="subject")
    Integer subject;

    public Profesor(String user, Integer subject) {
        this.user = user;
        this.subject = subject;
    }

    public Profesor() {}

    public Integer getIdprof() {
        return idprof;
    }

    public void setIdprof(Integer idprof) {
        this.idprof = idprof;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Integer getSubject() {
        return subject;
    }

    public void setSubject(Integer subject) {
        this.subject = subject;
    }

    @Override
    public String toString() {
        return "Profesor{" +
                "idprof=" + idprof +
                ", user='" + user + '\'' +
                ", subject=" + subject +
                '}';
    }
}
