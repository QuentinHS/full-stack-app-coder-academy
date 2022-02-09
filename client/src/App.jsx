import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useReducer, useState } from 'react'
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
import projectReducer from "./reducers/projectReducer"
import projectContext from "./context/projectContext"
import TradeProdvider from "./components/TradeProviders"
import NewProject from "./components/NewProject"

function App() {
  const [projectState, projectDispatch] = useReducer(projectReducer, [])
  
  
 

  return (
    <projectContext.Provider value ={{projectState, projectDispatch}}>
      < BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/projects" element={<ProjectsDashboard/>} />
          <Route path="/projects/new" element={<NewProject/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/User" element={<User  /> } />
          <Route path="/stage" element={<Stage /> } />
          <Route path="/tradeProviders" element={<TradeProdvider /> } />
          <Route path="/task" element={<Task /> } />
          {/* 
          
          <Trade />
          */}
          
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </projectContext.Provider>
   
  )
}

export default App
