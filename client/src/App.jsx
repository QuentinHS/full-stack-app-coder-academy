import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Stage from './components/Stage'
import Trade from './components/Trade'
import Task from './components/Task'
import User from './components/User'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import ProjectsDashboard from "./components/ProjectsDashboard"

function App() {
  const [count, setCount] = useState(0)
 

  return (
    < BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/projects" element={<ProjectsDashboard/>} />
        <Route path="/login" element={<Login/>} />
        {/* 
        <Stage />
        <Trade />
        <Task />
        <User /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
   
  )
}

export default App
