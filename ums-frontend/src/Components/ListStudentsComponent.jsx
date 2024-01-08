import React, {useEffect, useState} from 'react'
import { deleteStudent, listStudents } from '../Services/StudentService'
import {useNavigate} from 'react-router-dom'

const ListStudentsComponent = () => {

    const [students, setStudents] = useState([], )

    const navigator = useNavigate();

    useEffect(() => {
        getStudents()
    }, [])

    function getStudents () {
        listStudents().then((response) => {
            setStudents(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    function addNewStudent () {
        navigator("/add-student")
    }

    function updateStudent(id) {
        navigator(`/update-student/${id}`)
    }

    function removeStudent(id) {
        console.log(id);

        deleteStudent(id).then((response) => {
            getStudents();
        }).catch (error => {
            console.error(error);
        })
    }

  return (
    <div className = "container">

        <h2 className = "text-center">List of Students</h2>
        <button className ="btn btn-danger mb-2" onClick ={addNewStudent}>
            Add Student
        </button>
        <table className = "table table-striped table-bolded table-bordered">
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Student First Name</th>
                    <th>Student Last Name</th>
                    <th>Student email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student => 
                        <tr key = {student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>
                                <button className = "btn btn-info" onClick={() => updateStudent(student.id)}>
                                    Update
                                </button>
                                <button className = "btn btn-warning" onClick={() => removeStudent(student.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListStudentsComponent