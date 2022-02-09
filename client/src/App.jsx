import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useReducer, useState } from 'react'
import Stage from './components/Stage'
import Trade from './components/Trade'
import PMTask from './components/PMTask'
import User from './components/User'
import Nav from './components/Nav'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import ScrollToTop from "./components/ScrollToTop"
// import "./App.css"
import ProjectsDashboard from "./components/ProjectsDashboard"
import stateReducer from "./reducers/stateReducer"
import appContext from "./context/appContext"
import TradeProdvider from "./components/TradeProviders"
import NewProject from "./components/NewProject"
import TradieTask from "./components/TradieTask"
import api from "./services/api"
import EditUserDetails from "./components/EditUserDetails"

const initialState = {projects: [], currentUser:{}}
function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState)
  const {currentUser} = state

  
  useEffect(async () => {
    const res = await api.get('/showMe', {withCredentials: true})
    
    dispatch({
      type: "setCurrentUser",
      data: res.data.user
    })
}, [])

  
 

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
          <Route path="/User" element={<User/> } />
          <Route path="/User/edit" element={<EditUserDetails /> } />
          <Route path="/stage" element={<Stage /> } />
          <Route path="/tradeProviders" element={<TradeProdvider /> } />
          <Route path="/pmtask" element={<PMTask /> } />
          <Route path="/tradieTask" element={<TradieTask /> } />
          {/* 
          
          <Trade />
          */}
          
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </appContext.Provider>
   
  )
}

export default App
