package com.example.ums.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ums.entity.Student;

public interface StudentRepository extends JpaRepository <Student, Long> {
    
}
