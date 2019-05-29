package com.StudentManagement.dto;

import org.springframework.beans.factory.annotation.Value;

public class SubjectStudentGrade {

    private String name;
    private String grade;

    public SubjectStudentGrade() {
    }


    public SubjectStudentGrade(String name, String grade) {
        this.name = name;
        this.grade = grade;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
