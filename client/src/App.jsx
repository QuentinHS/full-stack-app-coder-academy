import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
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
        <Route path="/User" element={<User  /> } />
        <Route path="/stage" element={<Stage /> } />
        {/* 
        
        <Trade />
        <Task />*/}
        
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
   
  )
}

export default App
