import React from "react";
import { BiArrowBack, BiHome } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { BsFillPersonFill } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import "../Nav.css"
import BackButton from "./BackButton";

const Nav = () => {



    return(
        <div className="container" >
            
            <BackButton className="link" />
            <div className="linkGorup">
                <Link className="link" to="/project"><BiHome /></Link>
                <Link className="link" to="/user"><BsFillPersonFill /></Link>
                <Link className="link" to="/"><FiLogOut /></Link>
            </div>
        </div>
    )
}

export default Nav