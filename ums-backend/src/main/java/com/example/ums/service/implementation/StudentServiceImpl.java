package com.example.ums.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.ums.dto.StudentDto;
import com.example.ums.entity.Student;
import com.example.ums.exception.ResourceNotFoundException;
import com.example.ums.mapper.StudentMapper;
import com.example.ums.repository.StudentRepository;
import com.example.ums.service.StudentService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class StudentServiceImpl implements StudentService{

    private StudentRepository studentRepository;
    public StudentDto createStudent(StudentDto studentDto) {
        Student student = StudentMapper.mapToStudent(studentDto);
        Student savedStudent = studentRepository.save(student);
        return StudentMapper.mapToStudentDto(savedStudent);
    }
    @Override
    public StudentDto getStudentById(Long studentId) {
        Student student = studentRepository.findById(studentId).orElseThrow(() -> 
            new ResourceNotFoundException("Student does not exist with given ID" + studentId));

        return StudentMapper.mapToStudentDto(student);
    }
    @Override
    public List<StudentDto> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        return students.stream().map((student) -> StudentMapper.mapToStudentDto(student)).collect(Collectors.toList());
    }
    @Override
    public StudentDto updateStudent(Long studentId, StudentDto updatedStudent) {
        Student student = studentRepository.findById(studentId).orElseThrow (
            () -> new ResourceNotFoundException("Student does not exist with given ID" + studentId)
        );

        student.setFirstName(updatedStudent.getFirstName());
        student.setLastName(updatedStudent.getLastName());
        student.setEmail(updatedStudent.getEmail());

        Student updatedStudentObj = studentRepository.save(student);

        return StudentMapper.mapToStudentDto(updatedStudentObj);
    }
    @Override
    public void deleteStudent(Long studentId) {
        Student student = studentRepository.findById(studentId).orElseThrow (
            () -> new ResourceNotFoundException("Student does not exist with given ID" + studentId)
        );

        studentRepository.deleteById(studentId);
    }
    
}
