package com.example.ums.mapper;

import com.example.ums.dto.StudentDto;
import com.example.ums.entity.Student;

public class StudentMapper {
    
    public static StudentDto mapToStudentDto (Student student) {
        return new StudentDto(
            student.getId(),
            student.getFirstName(),
            student.getLastName(),
            student.getEmail()
        );
    }

    public static Student mapToStudent (StudentDto studentDto) {
        return new Student (
            studentDto.getId(),
            studentDto.getFirstName(),
            studentDto.getLastName(),
            studentDto.getEmail()
        );
    }
}
