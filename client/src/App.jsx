import { BrowserRouter, Routes, Route } from "react-router-dom"
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
<<<<<<< HEAD
import Landing from "./components/Landing"
import ScrollToTop from "./components/ScrollToTop"
=======
import Register from './components/Register'
import Login from './components/Login'
>>>>>>> 0f1f9c46ace8728a630ef9fe024ff0c2eddbd469

function App() {
  const [count, setCount] = useState(0)
 

  return (
<<<<<<< HEAD
    <div className="App">
      <BrowserRouter >
        <Nav />
        <h1>App</h1>

{/* Routes are not yet defined properly */}

        <Routes >
          <Route path="/" element={<Landing />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/stage/:id" element={<Stage />}/>
          <Route path="/trade/:id" element={<Trade />}/>
          <Route path="/task/:id" element={<Task />}/>
          {/* Need to find user by :id  */}
          <Route path="/user" element={<User />}/>
        </Routes>
        <ScrollToTop />
        {/* commented out because undesided on how I want to make it stay on bottom of page */}
        {/* <Footer /> */}
      </BrowserRouter> 
    </div>
=======
    < BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/projects" element={<Project/>} />
        <Route path="/login" element={<Login/>} />
        {/* 
        <Stage />
        <Trade />
        <Task />
        <User /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
   
>>>>>>> 0f1f9c46ace8728a630ef9fe024ff0c2eddbd469
  )
}

export default App
