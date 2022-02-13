import { useNavigate} from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi'

// BackButton is used in the Nav component
const BackButton = (props) => {
    
  // useNavigate allows the app to go to previous pages
    let navigate = useNavigate();
    return (
        <>
        {/* This is the back button */}
          <button className={props.className} onClick={() => navigate(-1)}><BiArrowBack /></button>
        </>
    )
}

// This is where the Backbutton is exported from
export default BackButton
