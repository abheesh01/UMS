package com.example.ums.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.ums.dto.StudentDto;
import com.example.ums.service.StudentService;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/students")
@AllArgsConstructor

public class StudentController {
    private StudentService studentService;

    //add student REST API
    @PostMapping
    public ResponseEntity <StudentDto> createStudent(@RequestBody StudentDto studentDto) {
       StudentDto savedStudent = studentService.createStudent(studentDto);
       return new ResponseEntity <> (savedStudent, HttpStatus.CREATED);
    }

    //get student REST API
    @GetMapping("{id}")
    public ResponseEntity <StudentDto> getStudentById(@PathVariable("id") Long studentId) {
        StudentDto studentDto = studentService.getStudentById(studentId);
        return ResponseEntity.ok(studentDto);
    }

    //get all students REST API
    @GetMapping
    public ResponseEntity <List<StudentDto>> getAllStudents() {
        List <StudentDto> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    //update students REST API
    @PutMapping("{id}")
    public ResponseEntity <StudentDto> updatedStudent(@PathVariable("id")Long studentId, @RequestBody StudentDto updatedStudent) {
        StudentDto studentDto = studentService.updateStudent(studentId, updatedStudent);
        return ResponseEntity.ok(studentDto);
    }

    //delete student REST API
    @DeleteMapping("{id}")
    public ResponseEntity <String> deletedStudent(@PathVariable ("id") Long studentId) {
        studentService.deleteStudent(studentId);
        return ResponseEntity.ok("Student Deleted");
    }
}
