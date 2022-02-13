import { Alert, AlertDescription, AlertIcon, CloseButton } from '@chakra-ui/react'
import react, { useContext, useState } from 'react'
import appContext from '../context/appContext'

const AlertComponent = ({alertStatus}) => {
const {state: {alert}, dispatch} = useContext(appContext)
    

       // close alert for deleting project 
       const closeAlert =() =>{
        //    setAlert(false)
        dispatch({
            type: "setSuccessAlert",
            data: null
        })
       }
    return (
        <>
            <Alert w='27rem' status={alertStatus}> 
                <AlertIcon/> 
                <AlertDescription>{alert.success}</AlertDescription>
                <CloseButton position='absolute' right='8px' top='8px' onClick={closeAlert}/>
            </Alert>
        </>
    )
}

export default AlertComponent
