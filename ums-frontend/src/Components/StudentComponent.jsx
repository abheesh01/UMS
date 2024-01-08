import React, { useState } from 'react'
import { createStudent, getStudent, updateStudent } from '../Services/StudentService'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const StudentComponent = () => {
  
  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const[email, setEmail] = useState('')
  
  const{id} = useParams()

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const navigator = useNavigate()

  useEffect(() => {

    if (id) {
      getStudent(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch(error => {
        console.error(error);
      })
    }
  }, [id])

  function handleFirstName (e) {
    setFirstName(e.target.value)
  }

  function handleLastName(e) {
    setLastName(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function saveUpdateStudent (e) {
    e.preventDefault();

    if (validateForm()) {

      const student = {firstName, lastName, email}
      console.log(student)

      if (id) {
        updateStudent(id, student).then((response) => {
          console.log(response.data);
          navigator('/students');
        }).catch(error => {
          console.error(error);
        })
      }
      else {
        createStudent(student).then((response) =>  {
          console.log(response.data);
          navigator('/students');
        }).catch(error => {
          console.error(error);
        })
      }
    }
   
  }

  function pageUpdate () {
    if (id) {
      return <h2 className = "text-center">Update Student</h2>
    }
    else {
      <h2 className = "text-center">Add Student</h2>
    }
  }
  
  function validateForm () {
    let valid = true;

    const errorsCopy = {... errors};

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid; 
  }

  return (
    <div className = "container">
      <br /> <br />
      <div className = "row">
        <div className = "card col-md-6 offset-md-3">
          {
            pageUpdate()
          }
          <div className = "card-body">
            <form>
              <div className = "form-group mb-2">
                <label className = "form-label">First Name: </label>
                <input
                  type = "text"
                  placeholders = "Enter Student First Name"
                  name = "firstName"
                  value = {firstName}
                  className = {`form-control ${ errors.firstName ? 'is-invalid' : ""}`}
                  onChange ={handleFirstName}
                >
                </input>
                {errors.firstName  && <div className = "invalid-feedback"> {errors.firstName} </div>}
              </div>

              <div className = "form-group mb-2">
                <label className = "form-label">Last Name: </label>
                <input
                  type = "text"
                  placeholders = "Enter Student Last Name"
                  name = "lastName"
                  value = {lastName}
                  className = {`form-control ${ errors.lastName ? 'is-invalid' : ""}`}
                  onChange ={handleLastName}
                >
                </input>
                {errors.lastName  && <div className = "invalid-feedback"> {errors.lastName} </div>}
              </div>

              <div className = "form-group mb-2">
                <label className = "form-label">Email: </label>
                <input
                  type = "text"
                  placeholders = "Enter Student Email"
                  name = "email"
                  value = {email}
                  className = {`form-control ${ errors.email ? 'is-invalid' : ""}`}
                  onChange ={handleEmail}
                >
                </input>
                {errors.email  && <div className = "invalid-feedback"> {errors.email} </div>}
              </div>
              <button className = "btn btn-success" onClick={saveUpdateStudent}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentComponent