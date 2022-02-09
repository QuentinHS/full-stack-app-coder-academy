import React, { useContext, useEffect, useState } from "react";
import {InputRightElement, InputGroup, Center, Input, Text,FormControl, FormLabel, FormErrorMessage, FormHelperText, Button, VStack, HStack, Alert, AlertIcon} from '@chakra-ui/react'
import { useFormik } from "formik"
import validate from "../validation/signupValidation"
import{ Link } from 'react-router-dom'
import api from "../services/api";
import appContext from "../context/appContext";



const User = () => {
    //setting user 
    // const [currentUser, setCurrentUser] = useState({})
    const {state: {currentUser}, dispatch } = useContext(appContext)

    // useEffect(async () => {
    //     const res = await api.get('/showMe', {withCredentials: true})
        
    //     setCurrentUser(res.data.user)
    // }, [])

  

 
    return(
        <div>
            <Center>
                <Text mb='1rem' fontSize='2xl' color='teal' as='b' > My Profile</Text>
            </Center> 
            <Center>
                 <Text mb='1rem' fontSize='2xl' color='teal'>{currentUser.firstName ? currentUser.firstName : "Add a first name"} {currentUser.lastName ? currentUser.lastName : "Add a last name"}</Text>
            </Center>
            <Center >
                <Text mb='1rem' mr='1rem' fontSize='2xl' color='teal' as='b' >Email:</Text>
                {currentUser.email ? <Text mb='1rem' fontSize='2xl' color='teal'>{currentUser.email}</Text> :  <Alert w='15rem' status='error'> <AlertIcon/> Add an email address! </Alert>}
            </Center>
            <Center>
                <Text mb='1rem' mr='1rem' fontSize='2xl' color='teal' as='b' >Position: </Text>
                {currentUser.role ? <Text mb='1rem' fontSize='2xl' color='teal'> {currentUser.role} </Text> : <Alert w='10rem' status='error'> <AlertIcon/> Add a role! </Alert>}
            </Center>
                {currentUser.role === "trade provider" ? 
            <Center>
                <Text mb='1rem' mr='1rem' fontSize='2xl' color='teal' as='b' >Trade: </Text> <Text mb='1rem' fontSize='2xl' color='teal'>{currentUser.trade ? currentUser.trade : "Add a Trade!"}</Text> 
            </Center>
                : null}
                
            <Center>
                <Text mb='1rem' mr='1rem' fontSize='2xl' color='teal' as='b' >Company: </Text>
                {currentUser.businessName ? <Text mb='1rem' fontSize='2xl' color='teal'>{currentUser.businessName} </Text>: <Alert w='15rem' status='error'> <AlertIcon/>Add company/business!</Alert>} 
            </Center>
            <Center>
                <Text mb='1rem' mr='1rem' fontSize='2xl' color='teal' >ABN: </Text>
                {currentUser.abn ? <Text mb='1rem' fontSize='2xl' color='teal'>{currentUser.abn}</Text>  : <Alert w='10rem' status='warning'> <AlertIcon/> Add an ABN</Alert> }
            </Center>
            <Center mt='2rem'>
                <Link to="/user/edit">
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

