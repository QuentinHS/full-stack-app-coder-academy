import { useState } from 'react'
import Project from './components/Project'
import Stage from './components/Stage'
import Trade from './components/Trade'
import Task from './components/Task'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>App</h1>
      <Project />
      <Stage />
      <Trade />
      <Task />
      <User />
    </div>
  )
}

export default App
