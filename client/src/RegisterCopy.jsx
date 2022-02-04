import React from "react";
import { useState, useEffect, useMemo } from "react";
import {useForm} from "react-hook-form"
import {InputRightElement, InputGroup, Center, Input, Text,FormControl, FormLabel, FormErrorMessage, FormHelperText, Button} from '@chakra-ui/react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const Register = () => {

    // form validations 
    const validationSchema = Yup.object().shape({
        firstname: Yup.object().required(),
        lastname: Yup.object().required(),
        password: Yup.string()
            .required('Please input a password')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Please input a password')
            .oneOf([Yup.ref('password')], 'Passwords must match')
    })


    const formOptions = {resolver: yupResolver(validationSchema)}
    const {register,  handleSubmit, formState} = useForm(formOptions)
   


    // State for Project Manager and Tradesman buttons 
    const [roleTrade, setRoleTrade] = React.useState(true)
    const handleClickTrade = () => setRoleTrade(true)
    const handleClickProjectManager = () => setRoleTrade(false)
    
    // State to show password input 
    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show)

    async function onSubmit(data){
        // default role is trade provider 
        const role = roleTrade ? "trade provider" : "project manager"
        data.role = role
        console.log(data) 
    }
    console.log(formState.errors.firstName)


    return(
        <>
            <Center>
                <Text mb='1rem' fontSize='5xl' color='teal' as='b'>Sign up</Text>
            </Center>
            <Center>
                <form onSubmit={handleSubmit(onSubmit)}>
                     <FormControl isRequired>
                        <FormLabel mt='2rem' htmlFor='email'>Select Your Role </FormLabel>
                        <Button mb='1rem' mr='1rem' width='15em' onClick={handleClickProjectManager}>I'm a Project Manager</Button>
                        <Button mb='1rem' width='15em' onClick={handleClickTrade}>I'm a Tradesman</Button>
                    </FormControl>


                    <FormControl isRequired isInvalid={formState.isValid} >
                        <InputGroup mt='2rem' flexDirection='row' flexWrap='wrap' >
                            <FormLabel w={[150, 200, 200]} mr='1rem' htmlFor='firstname'>First Name </FormLabel>
                            <FormLabel htmlFor='lastName'>Last Name </FormLabel>
                        </InputGroup>
                        <InputGroup flexDirection='row' flexWrap='wrap'>
                            <Input mr='0.5rem' w={[150, 200, 200]} id='firstname' placeholder='First Name' {...register("firstname")} />
                            <Input w={[150, 200, 200]} id='lastname' placeholder='Last Name' {...register("lastname", {required: "Please enter your last name"})}/>
                        </InputGroup>
                        <FormErrorMessage>
                            {(formState.errors.firstName && formState.errors.firstName.message)|| (formState.errors.lastName && formState.errors.lastName.message)}
                        </FormErrorMessage>
                    </FormControl>

                    {/* <FormControl isRequired isInvalid={errors.email}>
                        <FormLabel mt='2rem' htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' {...register("email",  {required: "Please enter your email"})} />
                        <FormErrorMessage>
                            {errors.email && errors.email.message}
                        </FormErrorMessage>
                    </FormControl>
                        
                    <FormControl isRequired isInvalid={errors.password}>
                        <FormLabel mt='2rem' htmlFor='password'>Password</FormLabel>
                        <InputGroup>
                            <Input id='password' type={show ? 'text':'password'}  {...register("password", {required: "Please enter a password atleast 6 characters long"})}/>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClickShow}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>
                            {errors.password && errors.password.message}
                        </FormErrorMessage>
                        
                    </FormControl>

                    <FormControl isRequired isInvalid={errors.confirmpassword}>
                        <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
                        <InputGroup>
                            <Input id='confirmPassword' type={show ? 'text' :'password'} {...register("confirmpassword",  {required: "Please enter a password atleast  8 characters long"})}/>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClickShow}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>

                    <FormControl isRequired isInvalid={errors.company}>
                        <FormLabel mt='2rem' htmlFor='company'>Company </FormLabel>
                        <Input id='company' placeholder='company' {...register("company")}/>
                        <FormErrorMessage>
                            {errors.company && errors.password.company}
                        </FormErrorMessage>
                    </FormControl>
                        
                    <FormControl isRequired={false}>
                        <FormLabel mt='2rem' htmlFor='abn'>ABN</FormLabel>
                        <Input id='abn' placeholder='abn' {...register("abn")} />
                    </FormControl> */}
                    <Button mt='2rem' w='20rem'colorScheme='teal' type='submit' >Submit</Button>
                </form>
            </Center>
        </>
    )
}

export default Register