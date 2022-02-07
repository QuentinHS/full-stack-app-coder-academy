import React from "react";
import {InputRightElement, InputGroup, Center, Input, Text,FormControl, FormLabel, FormErrorMessage, FormHelperText, Button, VStack, HStack} from '@chakra-ui/react'
import { useFormik } from "formik"
import validate from "../validation/signupValidation"
import{ Link } from 'react-router-dom'


const user = {pm: false, firstName: "John", lastName: "Doe", email: "john@doe", position: "Boss", trade: "carpenter", company: "John's construction", abn: 12345678 }
const pm = {pm: true, firstName: "Barny", lastName: "Gumble", email: "Barny@Gumble", position: null, trade: null, company: null, abn: null }



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
            <Center>
                {/* User name and other data will need to retrived and parsed in*/}
                <Text mb='1rem' fontSize='5xl' color='teal' as='b'>User</Text>
            </Center>
            {/* Maybe change position to something that isn't centered */}
            <Center mt='2rem' >
                <Text mb='1rem' fontSize='2xl' color='teal' as='b'>Email:</Text>
            </Center>
            <Center>
                <Text mb='1rem' fontSize='2xl' color='teal' as='b'>Position:</Text>
            </Center>
            <Center>
                <Text mb='1rem' fontSize='2xl' color='teal' as='b'>Trade:</Text>
            </Center>
            <Center>
                <Text mb='1rem' fontSize='2xl' color='teal' as='b'>Company:</Text>
            </Center>
            <Center>
                <Text mb='1rem' fontSize='2xl' color='teal' as='b'>ABN:</Text>
            </Center>
            <Center mt='2rem'>
                <Link to="/register">
                    <Button mt="1em" width="15rem" colorScheme="teal" variant="solid">Edit Profile</Button>
                </Link>
            </Center>
            <Center mt='1rem'>
                <Link to="/register">
                    <Button mt="1em" width="15rem" colorScheme="teal" variant="solid">Change Password</Button>
                </Link>
            </Center>
            <Center mt='5rem'>
                <Link to="/register">
                    <Button mt="1em" width="15rem" colorScheme="teal" variant="solid">Delete Account</Button>
                </Link>
            </Center>
        </div>
    )

}

export default User

