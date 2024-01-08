import './App.css'
import StudentComponent from './Components/StudentComponent'
import HeaderComponent from './Components/HeaderComponent'
import ListStudentsComponent from './Components/ListStudentsComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* http://localhost:3000 */}
        <Route path ='/' element = { <ListStudentsComponent />}> </Route>
        {/* http://localhost:3000/students */}
        <Route path ='/students' element = { <ListStudentsComponent />}> </Route>
        {/* http://localhost:3000/add-student */}
        <Route path = '/add-student' element = { <StudentComponent />}> </Route>
        {/* http://localhost:3000/update-student/1 */}
        <Route path = '/update-student/:id' element = { <StudentComponent />}> </Route>

      </Routes>
     
    </BrowserRouter>
    </>
  )
}

export default App
