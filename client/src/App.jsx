import { BrowserRouter } from "react-router-dom"
import { useState } from 'react'
import Project from './components/Project'
import Stage from './components/Stage'
import Trade from './components/Trade'
import Task from './components/Task'
import User from './components/User'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter >
        <Nav />
        <h1>App</h1>
        <Project />
        <Stage />
        <Trade />
        <Task />
        <User />
        <Footer />
      </BrowserRouter> 
    </div>
  )
}

export default App
