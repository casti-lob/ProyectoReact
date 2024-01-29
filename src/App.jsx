
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MuseumPost from './AddMuseum'
import './App.css'
import { MuseumDelete } from './DeleteMuseum'
import Footer from './Footer'
import DetailMuseum from './Museum'
import MuseumsList from './Museums'
import Navbar from './Navbar'
import { MuseumUpdate } from './UpdateMuseum'
import Home from './Home'
import UserList from './Users'
import DetailUser from './User'
import UserPost from './AddUser'
import UserUpdate from './UpdateUser'
import UserDelete from './DeleteUser'
import MuseumsVisiteds from './MuseumsVisiteds'


function App() {
  return(
    <Router>
      <Navbar/>
      <div className='container'>
          <Routes>
          <Route index element={<Home/>} />
          <Route path="/museumList" element={<MuseumsList/>} />
          <Route path="/museumDelete/:id" element={<MuseumDelete/>} />
          <Route path="/museum/:id" element={<DetailMuseum/>} />
          <Route path="/museumUpdate/:id" element={<MuseumUpdate/>} />
          <Route path="/museumAdd" element={<MuseumPost/>} />
          <Route path="/userList" element={<UserList/>} />
          <Route path="/user/:id" element={<DetailUser/>} />
          <Route path="/userAdd" element={<UserPost/>} />
          <Route path="/userUpdate/:id" element={<UserUpdate/>} />
          <Route path="/userDelete/:id" element={<UserDelete/>} />
          <Route path="/museumsVisited/:idUser" element={<MuseumsVisiteds/>} />
          </Routes>

          
      </div>

      <Footer/>
    </Router>
  )
}

export default App
