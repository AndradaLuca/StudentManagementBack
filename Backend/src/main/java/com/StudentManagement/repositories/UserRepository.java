package com.StudentManagement.repositories;

import com.StudentManagement.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    User findByEmailAndPassword(String email, String password);
}
