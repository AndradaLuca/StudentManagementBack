package com.StudentManagement.dto;

public class ProfPageDto {
    public String email;
    public String name;
    public String grade;

    public ProfPageDto(String email, String name, String grade) {
        this.email = email;
        this.name = name;
        this.grade = grade;
    }

    public ProfPageDto() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }


}
