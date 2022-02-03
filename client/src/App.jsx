import { useState } from 'react'
import Project from './components/Project'
import Stage from './components/Stage'
import Trade from './components/Trade'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Project />
      <Stage />
      <Trade />
      <h1>App</h1>
    </div>
  )
}

export default App
