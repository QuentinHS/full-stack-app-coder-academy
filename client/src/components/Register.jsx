import React from "react";
import {InputRightElement, InputGroup, Center, Input, Text,FormControl, FormLabel, FormErrorMessage, FormHelperText, Button, VStack, HStack} from '@chakra-ui/react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useFormik } from "formik"
import validate from "../validation/signupValidation"



const Register = () => {


    // // form validations 
    // const validationSchema = Yup.object().shape({
    //     firstname: Yup.object().required(),
    //     lastname: Yup.object().required(),
    //     password: Yup.string()
    //         .required('Please input a password')
    //         .min(6, 'Password must be at least 6 characters'),
    //     confirmPassword: Yup.string()
    //         .required('Please input a password')
    //         .oneOf([Yup.ref('password')], 'Passwords must match')
    // })

    
    
    // State for Project Manager and Tradesman buttons 
    const [roleTrade, setRoleTrade] = React.useState(true)
    const handleClickTrade = () => setRoleTrade(true)
    const handleClickProjectManager = () => setRoleTrade(false)
    
    // State to show password input 
    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show)
    
   
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
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
        <>
            <Center>
                <Text mb='1rem' fontSize='5xl' color='teal' as='b'>Sign up</Text>
            </Center>
            <Center>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl isRequired >
                        <FormLabel mt='2rem' htmlFor='role'>Select Your Role </FormLabel>
                        <Button id="role" mb='1rem' mr='1rem' width='15em' onClick={handleClickProjectManager}>I'm a Project Manager</Button>
                        <Button mb='1rem' width='15em' onClick={handleClickTrade}>I'm a Tradesman</Button>
                    </FormControl> 


                    <FormControl isInvalid={(formik.errors.firstname) || (formik.errors.lastname)}>
                        <HStack spacing='10px'>
                            <FormLabel w={[150, 200, 200]} mr='1rem' htmlFor='firstname'>First Name </FormLabel>
                            <FormLabel w={[150, 200, 200]} htmlFor='lastName'>Last Name </FormLabel>
                        </HStack>
                        <Input mr='0.5rem' w={[150, 200, 200]} id='firstname'name="firstname" type="text" placeholder='First Name' onChange={formik.handleChange} value={formik.values.firstname} />
                        <Input w={[150, 200, 200]} id='lastname' name="lastname" type="text" placeholder='Last Name' onChange={formik.handleChange} value={formik.values.lastname}/>
                        <HStack spacing='3rem' >
                            {formik.errors.firstname ? <FormErrorMessage>{formik.errors.firstname}</FormErrorMessage> : null}
                            {formik.errors.lastname ? <FormErrorMessage>{formik.errors.lastname}</FormErrorMessage> : null}
                        </HStack>
                    </FormControl>
                        
        

                    <FormControl isInvalid={formik.errors.email}>
                        <FormLabel mt='2rem' htmlFor='email'>Email address</FormLabel>
                        <Input id='email' name='email' type='email' placeholder="email@example.com" onChange={formik.handleChange} value={formik.values.email}/>
                        {formik.errors.email ? <FormErrorMessage>{formik.errors.email}</FormErrorMessage> : null}
                    </FormControl>
                        
                    <FormControl isInvalid={formik.errors.password}>
                        <FormLabel mt='2rem' htmlFor='password'>Password</FormLabel>
                        <InputGroup>
                            <Input id='password' name='password' type={show ? 'text':'password'} onChange={formik.handleChange} value={formik.values.password} />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClickShow}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {formik.errors.password ? <FormErrorMessage>{formik.errors.password}</FormErrorMessage> : null}
                        
                    </FormControl>

                    <FormControl isInvalid={formik.errors.confirmPassword}>
                        <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
                        <InputGroup>
                            <Input id='confirmPassword' type={show ? 'text' :'password'} onChange={formik.handleChange} value={formik.values.confirmPassword}/>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClickShow}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {formik.errors.confirmPassword ? <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage> : null}
                    </FormControl>

                    <FormControl isInvalid={formik.errors.company}>
                        <FormLabel mt='2rem' htmlFor='company'>Company </FormLabel>
                        <Input id='company' name='company' placeholder='Company or Business Name' onChange={formik.handleChange} value={formik.values.company}/>
                        {formik.errors.company ? <FormErrorMessage>{formik.errors.company}</FormErrorMessage> : null}
                    </FormControl>
                        
                    <FormControl isInvalid={formik.errors.abn}>
                        <FormLabel mt='2rem' htmlFor='abn'>ABN</FormLabel>
                        <Input id='abn' name='abn' placeholder='ABN' onChange={formik.handleChange} value={formik.values.abn} />
                        {formik.errors.abn ? <FormErrorMessage>{formik.errors.abn}</FormErrorMessage> : null}
                    </FormControl>
                    <Button mt='2rem' w='20rem'colorScheme='teal' type='submit' >Submit</Button>
                </form>
            </Center>
        </>
    )
}

export default Register