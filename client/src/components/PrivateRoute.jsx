import appContext from "../context/appContext"
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

export const PrivateRoute = ({ children }) => {
 
  let {state: { auth }}= useContext(appContext)

  if (auth) {
    return children
  } 
  
  return <Navigate to="/" />
  

}
