import { useNavigate } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi'


const BackButton = (props) => {
    
    let navigate = useNavigate();
    return (
        <>
          <button className={props.className} onClick={() => navigate(-1)}><BiArrowBack /></button>
        </>
    )
}

export default BackButton
