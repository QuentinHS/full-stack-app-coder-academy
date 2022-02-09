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
import projectReducer from "./reducers/stateReducer"
import appContext from "./context/appContext"
import TradeProdvider from "./components/TradeProviders"
import NewProject from "./components/NewProject"

const initialState = {projects: []}
function App() {
  const [state, dispatch] = useReducer(projectReducer, initialState)
  const {projects} = state

  
 

  return (
    <appContext.Provider value ={{state, dispatch}}>
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
          {/* 
          
          <Trade />
          <Task />*/}
          
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </appContext.Provider>
   
  )
}

export default App
