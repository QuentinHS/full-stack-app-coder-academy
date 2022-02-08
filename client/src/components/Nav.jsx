import React from "react";
import { BiHome } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { BsFillPersonFill } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import "../Nav.css"
import BackButton from "./BackButton";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import api from "../services/api";

const Nav = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["user", "role"])
    const navigate = useNavigate()
    
     const  logout = (e) =>{
        e.preventDefault()
        api.get("/logout")
        .then((res) => {
            console.log(res)
            removeCookie("user", {path: '/'})
            removeCookie("role", {path: '/'})
            console.log(cookies)
        })
        navigate("/")
    }


    return(
        <div className="container" >
            <BackButton className="back" />
            <div className="linkGorup">
                <Link className="link" to="/projects"><BiHome /></Link>
                <Link className="link" to="/user"><BsFillPersonFill /></Link>
                <Link className="link" to="/" onClick={logout}><FiLogOut /></Link>
            </div>
        </div>
    )
}

export default Nav