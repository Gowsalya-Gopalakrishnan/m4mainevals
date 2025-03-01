import React from 'react'
import Navbar from './components/features/Navbar'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import MyBooksPage from './pages/MyBooksPage'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/mybookstore' element={<MyBooksPage/>}/>
      </Routes>
    </div>
  )
}

export default App
