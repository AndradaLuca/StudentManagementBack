package com.StudentManagement.services;

import com.StudentManagement.entities.Grup;
import com.StudentManagement.repositories.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GroupService {

    @Autowired
    GroupRepository groupRepository;

    public List<Grup> list() {

        return groupRepository.findAll();
    }

    public Optional<Grup> listById(Integer id) {

        return groupRepository.findById(id);
    }

}
