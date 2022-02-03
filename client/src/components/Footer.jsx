import React from "react";
import{ Link } from 'react-router-dom'
import { BiUpArrowAlt } from 'react-icons/bi'
import "../Footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <Link className="toTop" to="../" ><BiUpArrowAlt /></Link>
        </div>
    )
}

export default Footer