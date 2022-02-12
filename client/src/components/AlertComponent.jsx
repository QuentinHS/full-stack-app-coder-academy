import { Alert, AlertDescription, AlertIcon, CloseButton } from '@chakra-ui/react'
import react, { useContext, useState } from 'react'
import appContext from '../context/appContext'

const AlertComponent = (alertState, alertMessage) => {
const {state: {alert}} = useContext(appContext)
    

       // close alert for deleting project 
       const closeAlert =() =>{
        //    setAlert(false)
       }
   
    return (
        <>
            <Alert w='27rem' status={alertState}> 
                <AlertIcon/> 
                <AlertDescription>{alertMessage}</AlertDescription>
                <CloseButton position='absolute' right='8px' top='8px' onClick={closeAlert}/>
            </Alert>
        </>
    )
}

export default AlertComponent
