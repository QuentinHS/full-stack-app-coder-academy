import { useState } from 'react'
import Project from './components/project'
import Stage from './components/stage'
import Trade from './components/trade'

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
