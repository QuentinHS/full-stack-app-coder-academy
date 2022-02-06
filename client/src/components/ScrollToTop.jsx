import { useEffect, useState } from "react";
import { BiArrowFromBottom } from 'react-icons/bi'
import "../ScrollToTop.css"


const ScrollToTop = () => {
    const [isVisable, setIsVisable ] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 300){
            setIsVisable(true)
        } else {
            setIsVisable(false)
        }
    }
    console.log()
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
    
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }

    }, [])

    return (
        <div className={isVisable ? "opOn" : "opOff" }>
            <button type="button" onClick={scrollToTop} ><BiArrowFromBottom /></button>
        </div>
    )
}

export default ScrollToTop