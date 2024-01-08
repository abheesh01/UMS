package com.example.ums.service;

import java.util.List;

import com.example.ums.dto.StudentDto;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);

    StudentDto getStudentById (Long studentId);

    List<StudentDto> getAllStudents();

    StudentDto updateStudent(Long studentId, StudentDto updatedStudent);

    void deleteStudent(Long studentId);
}
