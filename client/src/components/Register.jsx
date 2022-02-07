import React from "react";
import {InputRightElement, InputGroup, Center, Input, Text,FormControl, FormLabel, FormErrorMessage, Button, HStack} from '@chakra-ui/react'
import { useFormik } from "formik"
import validate from "../validation/signupValidation"
import UserDetailsForm from "./UserDetailsForm";
import api from "../services/api";




const Register = () => {

   // State for Project Manager and Tradesman buttons 
   const [roleTrade, setRoleTrade] = React.useState(true)
   const handleClickTrade = () => setRoleTrade(true)
   const handleClickProjectManager = () => setRoleTrade(false)
 
    
    
   
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            businessName: '',
            abn: null
        
        },
        validate,
        onSubmit: (values, {resetForm} ) => {
        //   alert(JSON.stringify(values, null, 2))
            const role = roleTrade ? "trade provider" : "project manager"
            values.role = role
            delete values.confirmPassword
            console.log(values)
        
            api.post('/register', values)
            .then ((res) => {
                console.log(res.data)
            }).catch((error)=>{

                console.log(error.response)
            })
            
        },
    })   
    
                    
                    
    return(
        <>
            <Center>
                <Text mb='1rem' fontSize='5xl' color='teal' as='b'>Sign up</Text>
            </Center>
           <UserDetailsForm formik={formik} handleClickProjectManager={handleClickProjectManager} handleClickTrade={handleClickTrade}/>
        </>
    )
}

export default Register