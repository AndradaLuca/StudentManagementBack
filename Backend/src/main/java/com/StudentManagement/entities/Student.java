package com.StudentManagement.entities;

import jdk.internal.instrumentation.TypeMapping;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Table
@Entity(name = "Student")
public class Student {

    @Id
    @Column(name = "idstudent")
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    private Integer idStudent;

    @Column(name = "email")
    private String email;
    @Column(name = "cnp")
    private String CNP;

}
