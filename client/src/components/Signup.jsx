import React from "react";
import { useState } from "react";
import {InputRightElement, InputGroup, Center, Input, Text,FormControl, FormLabel, FormErrorMessage, FormHelperText, Button} from '@chakra-ui/react'

const Signup = () => {
    // State for Project Manager and Tradesman buttons 
    const [roleTrade, setRoleTrade] = React.useState(true)
    const handleClickTrade = () => setRoleTrade(true)
    const handleClickProjectManager = () => setRoleTrade(false)
    
    // State to show password input 
    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show)

    async function handleSubmit(e){
        e.preventDefault()

        
    }


    return(
        <>
            <Center>
                <Text mb='1rem' fontSize='5xl' color='teal' as='b'>Sign up</Text>
            </Center>
            <Center>
                <FormControl isRequired width='30rem'>
                    <FormLabel mt='2rem' htmlFor='email'>Select Your Role </FormLabel>
                    <Button mb='1rem' mr='1rem' width='15em' onClick={handleClickProjectManager}>I'm a Project Manager</Button>
                    <Button mb='1rem' width='15em' onClick={handleClickTrade}>I'm a Tradesman</Button>
                    <InputGroup mt='2rem' flexDirection='row' flexWrap='wrap' >
                        <FormLabel w={[150, 200, 200]} mr='1rem' htmlFor='firstName'>First Name </FormLabel>
                        <FormLabel htmlFor='lastName'>Last Name </FormLabel>
                    </InputGroup>
                    <InputGroup flexDirection='row' flexWrap='wrap'>
                        <Input mr='0.5rem' w={[150, 200, 200]} id='firstName' placeholder='First Name' />
                        <Input w={[150, 200, 200]} id='lastName' placeholder='Last Name' />
                    </InputGroup>
                    
                    <FormLabel mt='2rem' htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' />

                    <FormLabel mt='2rem' htmlFor='password'>Password</FormLabel>
                    <InputGroup>
                        <Input id='password' type={show ? 'text':'password'} />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClickShow}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
                    <InputGroup>
                        <Input id='confirmPassword' type={show ? 'text' :'password'} />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClickShow}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    
                    <FormLabel mt='2rem' htmlFor='company'>Company </FormLabel>
                    <Input id='Company' placeholder='Company' />
                    
                    <FormControl isRequired={false}>
                        <FormLabel mt='2rem' htmlFor='abn'>ABN</FormLabel>
                        <Input id='abn' placeholder='abn' />
                    </FormControl>
                    <Button mt='2rem' w='20rem'colorScheme='teal' type='submit'>Submit</Button>
                </FormControl>
            </Center>
        </>
    )
}

export default Signup