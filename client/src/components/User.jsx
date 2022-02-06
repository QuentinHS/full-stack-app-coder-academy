import React from "react";
import {InputRightElement, InputGroup, Center, Input, Text,FormControl, FormLabel, FormErrorMessage, FormHelperText, Button, VStack, HStack} from '@chakra-ui/react'
import { useFormik } from "formik"
import validate from "../validation/signupValidation"







const User = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            company: '',
            abn: null
        
        },
        validate,
        onSubmit: (values, {resetForm} ) => {
        //   alert(JSON.stringify(values, null, 2))
            const role = roleTrade ? "trade provider" : "project manager"
            values.role = role
            console.log(values)
            resetForm()
        },
    })  
    return(
        <div>
            <h1>User</h1>
        </div>
    )

}

export default User

