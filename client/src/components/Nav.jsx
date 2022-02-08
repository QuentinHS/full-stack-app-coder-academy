import React from "react";
import { BiHome } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { BsFillPersonFill } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import "../Nav.css"
import BackButton from "./BackButton";
import { useCookies } from "react-cookie";

const Nav = () => {
    const [cookies, setCookie] = useCookies(["user"])
    
    const logout = (e) =>{
        cookies.remove
    }


    return(
        <div className="container" >
            <BackButton className="back" />
            <div className="linkGorup">
                <Link className="link" to="/projects"><BiHome /></Link>
                <Link className="link" to="/user"><BsFillPersonFill /></Link>
                <Link className="link" to="/"><FiLogOut /></Link>
            </div>
        </div>
    )
}

export default Nav