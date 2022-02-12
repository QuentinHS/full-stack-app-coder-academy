import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useEffect, useReducer, useState } from 'react'
import Trade from './components/NewTask'
import PMTask from './components/PMTask'
import User from './components/User'
import Nav from './components/Nav'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import ScrollToTop from "./components/ScrollToTop"
import Project from "./components/Project"
// import "./App.css"
import ProjectsDashboard from "./components/ProjectsDashboard"
import stateReducer from "./reducers/stateReducer"
import appContext from "./context/appContext"
import TradeProdvider from "./components/TradeProviders"
import NewProject from "./components/NewProject"
import TradieTask from "./components/TradieTask"
import api from "./services/api"
import EditUserDetails from "./components/EditUserDetails"
import EditUserPassword from "./components/EditUserPassword"
import NewTask from "./components/NewTask"
import TasksApproval from "./components/TasksApproval"
import NewStage from "./components/NewStage"
import { PrivateRoute } from "./components/PrivateRoute"

const initialState = {projects: [], currentUser:{}, stages: []}
function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  return (
    <appContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/projects"
            element={
              <PrivateRoute>
                <ProjectsDashboard />
              </PrivateRoute>
            }
          />
          <Route path="/projects/new" element={<NewProject />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/projects/:id/stages/new" element={<NewStage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
          <Route path="/user/edit" element={<EditUserDetails />} />
          <Route path="/user/password" element={<EditUserPassword />} />
          <Route path="/tradeProviders" element={<TradeProdvider />} />
          <Route path="/pmTask" element={<PMTask />} />
          <Route path="/tradieTask" element={<TradieTask />} />
          <Route path="/newTask" element={<NewTask />} />
          <Route path="/tasksApproval" element={<TasksApproval />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </appContext.Provider>
  )
}

export default App
