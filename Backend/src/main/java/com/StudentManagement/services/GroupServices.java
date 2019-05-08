package com.StudentManagement.services;

import com.StudentManagement.entities.Group;
import com.StudentManagement.entities.Student;
import com.StudentManagement.repositories.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupServices {
    @Autowired
    GroupRepository groupRepository;

    //create a new student
    public Group save(Group group) {
        return groupRepository.save(group);
    }

    //delete a student

    public void delete (Group group){
        groupRepository.delete(group);
    }

    //find all student
    public List<Group> findAll()
    {
        return groupRepository.findAll();
    }
}
