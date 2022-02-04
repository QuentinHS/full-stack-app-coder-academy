import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import Project from './components/Project'
import Stage from './components/Stage'
import Trade from './components/Trade'
import Task from './components/Task'
import User from './components/User'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    < BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/projects" element={<Project/>} />
        {/* 
        <Stage />
        <Trade />
        <Task />
        <User /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
   
  )
}

export default App
