import React from "react";
import api from "../services/api";
import { Input, InputLeftAddon, InputGroup, Center, Button, Text } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import { AiOutlinePlusCircle, AiFillExclamationCircle } from 'react-icons/ai'
import{ Link } from 'react-router-dom'



const Project = () => {

    return(
        <div>
            <Center>
                <div>
                    <InputGroup>
                        <InputLeftAddon children={<BiSearch />} />
                        <Input width='' variant='outline' placeholder='Search Projects' />   
                    </InputGroup>   
                </div>
            </Center>  
            
            <Center >
                <Link to="/register">
                    <Button leftIcon={<AiOutlinePlusCircle />} mt="1em" width="15em" colorScheme="teal" variant="outline">Create New Project</Button>
                </Link>
            </Center>
            <Center>
                <Text mt='1rem' fontSize='3xl' color='teal' as='b'>User</Text>
            </Center>
            <Center >
                
                {/* Need to show individual projects */}
                <Link to="/register">
                    <Button mt="1em" width="15em" colorScheme="teal" variant="outline">Project: Name</Button>
                </Link>
                {/* <Text mb='1rem' fontSize='2xl' color='teal' as='b'>Projet</Text> */}
            </Center>
        </div>
    )
}

export default Project