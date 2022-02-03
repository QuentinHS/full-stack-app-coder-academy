import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Project from './components/Project'
import Stage from './components/Stage'
import Trade from './components/Trade'
import Task from './components/Task'
import User from './components/User'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Landing from "./components/Landing"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const [count, setCount] = useState(0)

  return (
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
          <Route path="/user/:id" element={<User />}/>
        </Routes>
        <ScrollToTop />
        <Footer />
      </BrowserRouter> 
    </div>
  )
}

export default App
