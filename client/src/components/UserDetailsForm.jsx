import {InputRightElement, InputGroup, Center, Input, Text, FormControl, FormLabel, FormErrorMessage, Button, HStack} from '@chakra-ui/react'
import { useFormik } from "formik"
import React from "react";
import api from "../services/api";
const UserDetailsForm = ({registering, passwordOnly, formik, handleClickTrade, handleClickProjectManager}) => {


    // State to show password input 
    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show)

    return(
        <>
           <Center>
                <form onSubmit={formik.handleSubmit}>
                {registering ? 
                    <FormControl isRequired >
                        <FormLabel mt='2rem' htmlFor='role'>Select Your Role </FormLabel>
                        <Button id="role" mb='1rem' mr='1rem' width='15em' onClick={handleClickProjectManager}>I'm a Project Manager</Button>
                        <Button mb='1rem' width='15em' onClick={handleClickTrade}>I'm a Tradesman</Button>
                    </FormControl> : 
                    null
                }

                {passwordOnly ? null: 
                    <>
                        <FormControl isInvalid={(formik.errors.firstName) || (formik.errors.lastName)}>
                            <HStack spacing='10px'>
                                <FormLabel w={[150, 200, 200]} mr='1rem' htmlFor='firstname'>First Name </FormLabel>
                                <FormLabel w={[150, 200, 200]} htmlFor='lastName'>Last Name </FormLabel>
                            </HStack>
                            <Input mr='0.5rem' w={[150, 200, 200]} id='firstName'name="firstName" type="text"  onChange={formik.handleChange} value={formik.values.firstName} />
                            <Input w={[150, 200, 200]} id='lastName' name="lastName" type="text" placeholder='Last Name' onChange={formik.handleChange} value={formik.values.lastName}/>
                            <HStack spacing='3rem' >
                                {formik.errors.firstName ? <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> : null}
                                {formik.errors.lastName ? <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage> : null}
                            </HStack>
                        </FormControl>
                            
            

                        <FormControl isInvalid={formik.errors.email}>
                            <FormLabel mt='2rem' htmlFor='email'>Email address</FormLabel>
                            <Input id='email' name='email' type='email' placeholder="email@example.com" onChange={formik.handleChange} value={formik.values.email}/>
                            {formik.errors.email ? <FormErrorMessage>{formik.errors.email}</FormErrorMessage> : null}
                        </FormControl>
                    </>
                }

                {passwordOnly ?
                     <FormControl isInvalid={formik.errors.oldPassword}>
                            <FormLabel mt='2rem' htmlFor='oldPassword'>Current Password</FormLabel>
                            <InputGroup>
                                <Input id='oldPassword' name='oldPassword' type={'password'} onChange={formik.handleChange} value={formik.values.oldPassword} />
                            </InputGroup>
                            {formik.errors.oldPassword ? <FormErrorMessage>{formik.errors.oldPassword}</FormErrorMessage> : null}
                            
                        </FormControl>
                
                : null}


                {registering || passwordOnly ? 
                    <>
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
                    </> : 
                null}

                {passwordOnly ? null: 
                    <>
                        <FormControl isInvalid={formik.errors.businessName}>
                            <FormLabel mt='2rem' htmlFor='businessName'>Business Name </FormLabel>
                            <Input id='businessName' name='businessName' placeholder='Company or Business Name' onChange={formik.handleChange} value={formik.values.businessName}/>
                            {formik.errors.businessName ? <FormErrorMessage>{formik.errors.businessName}</FormErrorMessage> : null}
                        </FormControl>
                            
                        <FormControl isInvalid={formik.errors.abn}>
                            <FormLabel mt='2rem' htmlFor='abn'>ABN</FormLabel>
                            <Input id='abn' name='abn' placeholder='ABN' onChange={formik.handleChange} value={formik.values.abn} />
                            {formik.errors.abn ? <FormErrorMessage>{formik.errors.abn}</FormErrorMessage> : null}
                        </FormControl>
                    </>
                }

                    <Button mt='2rem' w='20rem'colorScheme='teal' type='submit' >Submit</Button>
                </form>
            </Center>
            
        </>
    )
}

export default UserDetailsForm