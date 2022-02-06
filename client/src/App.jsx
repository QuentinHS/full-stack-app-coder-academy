import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Project from './components/Project'
import Stage from './components/Stage'
import Trade from './components/Trade'
import Task from './components/Task'
import User from './components/User'
import Nav from './components/Nav'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import ScrollToTop from "./components/ScrollToTop"
// import "./App.css"

function App() {
  const [count, setCount] = useState(0)
 

  return (
    < BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/project" element={<Project/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/User" element={<User  /> } />
        {/* 
        <Stage />
        <Trade />
        <Task />*/}
        
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
   
  )
}

export default App
