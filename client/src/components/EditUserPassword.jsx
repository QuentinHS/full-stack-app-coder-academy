import React, {useContext, useState} from "react"
import appContext from '../context/appContext'
import { useNavigate } from 'react-router'
import validate from "../validation/editPasswordValidation"
import UserDetailsForm from "./UserDetailsForm"
import { useFormik } from "formik"
import { Alert, AlertIcon, Button, Center, Text } from "@chakra-ui/react"
import api from "../services/api"
import { Link } from "react-router-dom"


const EditUserPassword = () =>{
    // user details from state 
    const {state: {currentUser}, dispatch } = useContext(appContext)
    // navigate components 
    const navigate = useNavigate()

    // set success alert state 
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            password: '',
            confirmPassword: ''
        },
        validate,
        onSubmit: (values, {resetForm} ) => {
        //   alert(JSON.stringify(values, null, 2))
            console.log(values)
        
            api.patch('/updateUserPassword', values, { withCredentials: true })
            .then ((res) => {
                console.log(res.data)
                setSuccess(true)
                setError(false)
                
            })
            .catch((error)=>{
                console.log(error.response.data)
                setError(true)
                setSuccess(false)
            })
            resetForm()
            
        },
    }) 
    console.log(formik.errors)
    return(
        <>
            <Center>
                <Text mb='1rem' fontSize='5xl' color='teal' as='b'>Edit Password</Text>
            </Center>
           <UserDetailsForm passwordOnly={true} formik={formik} />
           {success ? 
           <>
           <Center>
                <Alert w="20rem" mt="1rem" status="success">
                    <AlertIcon/>
                    Your password was successfully changed
                </Alert> 
           </Center>
            <Center>
                <Link to="/user">
                    <Button mt="1rem" w="20rem" colorScheme='pink'> Back to Profile</Button> 
                </Link>
            </Center>
           </>
           : null}
           {error ? 
           <Alert mt="1rem" w="30rem" status="error">
               <AlertIcon/>
               Passoword not changed, please check current password and new password
           </Alert> : null}
        </>
    )



}

export default EditUserPassword