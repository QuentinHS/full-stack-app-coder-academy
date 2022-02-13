import { useEffect, useState } from "react";
import { BiArrowFromBottom } from 'react-icons/bi'
import "../ScrollToTop.css"


// The ScrollToTop is used to scroll to the top of the page once the page offset reaches above 300
const ScrollToTop = () => {
    // Relies on the state to be either true or false for the button to be visable
    const [isVisable, setIsVisable ] = useState(false)

    // Toggles between visabel and not
    const toggleVisibility = () => {
        if(window.pageYOffset > 300){
            setIsVisable(true)
        } else {
            setIsVisable(false)
        }
    }

    // This enables the smooth action when scrolling back to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    // UseEffect prevents infanit loop and removes eventlistener when necessary
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
    
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }

    }, [])

    return (
        <div className="toTop">
            <button className={isVisable ? "opOn" : "opOff" } type="button" onClick={scrollToTop} ><BiArrowFromBottom /></button>
        </div>
    )
}

export default ScrollToTop