import React, { useState, useEffect } from "react";
import {InputRightElement, InputGroup, Center, Input, Text,FormControl, FormLabel, FormErrorMessage, Button, HStack} from '@chakra-ui/react'
import { useFormik } from "formik"
import validate from "../validation/signupValidation"
import UserDetailsForm from "./UserDetailsForm";
import api from "../services/api";
import { useNavigate } from 'react-router'
import { useCookies } from "react-cookie";



const Register = () => {

   // State for Project Manager and Tradesman buttons 
   const [roleTrade, setRoleTrade] = React.useState(true)
   const handleClickTrade = () => setRoleTrade(true)
   const handleClickProjectManager = () => setRoleTrade(false)
 
   const navigate = useNavigate()

   // get user detials from cookies 
    const [cookies, setCookie] = useCookies("user", "role")


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
        
            api.post('/register', values, { withCredentials: true })
            .then ((res) => {
                console.log(res.data.user)
                setCookie("user", res.data.user.userId, {path: '/'})
                setCookie("role", res.data.user.role, {path: '/'})
                
            })
            .then(
                console.log(cookies))
            .then(() => navigate('/projects'))
            .catch((error)=>{
                console.log(error.response)
            })
            resetForm()
            
        },
    })   
    
                    
                    
    return(
        <>
            <Center>
                <Text mb='1rem' fontSize='5xl' color='teal' as='b'>Sign up</Text>
            </Center>
           <UserDetailsForm registering={true} formik={formik} handleClickProjectManager={handleClickProjectManager} handleClickTrade={handleClickTrade}/>
        </>
    )
}

export default Register