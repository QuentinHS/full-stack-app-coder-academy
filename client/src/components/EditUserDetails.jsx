import { Center, Text } from '@chakra-ui/react'
import { useFormik } from 'formik'
import react, { useContext, useState } from 'react'
import appContext from '../context/appContext'
import validate from '../validation/editUserValidation'
import UserDetailsForm from './UserDetailsForm'
import api from '../services/api'
import { useNavigate } from 'react-router'

const EditUserDetails = () => {
  
    const {state: {currentUser}, dispatch } = useContext(appContext)

    const navigate = useNavigate()

 
    const formik = useFormik({
        initialValues: {
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            email: currentUser.email,
            businessName: currentUser.businessName,
            abn: currentUser.abn ? currentUser.abn : null
        
        },
        enableReinitialize: true,
        validate,
        onSubmit: (values, {resetForm} ) => {
        //   alert(JSON.stringify(values, null, 2))
            console.log(values)
        
            api.patch('/updateUser', values, { withCredentials: true })
            .then ((res) => {
                console.log(res.data.user)
                dispatch({
                    type: "setCurrentUser",
                    data: res.data.user
                })
                console.log(currentUser)
                
            })
            .then(() => navigate('/user'))
            .catch((error)=>{
                console.log(error.response)
            })
            // resetForm()
            
        },
    }) 
    
                      
    return(
        <>
            <Center>
                <Text mb='1rem' fontSize='5xl' color='teal' as='b'>Edit Details</Text>
            </Center>
           <UserDetailsForm registering={false} formik={formik} />
        </>
    )

}
export default EditUserDetails