package com.StudentManagement.dto;

import org.springframework.beans.factory.annotation.Value;

public class SubjectStudentGrade {

    private String grade;
    private String name;

    public SubjectStudentGrade() {
    }

    public SubjectStudentGrade(String grade, String name) {

        this.grade = grade;
        this.name = name;
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
