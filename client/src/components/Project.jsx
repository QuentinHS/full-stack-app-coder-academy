import React from "react";
import api from "../services/api";
import { Input, InputLeftAddon, InputGroup, Center } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'


const Project = () => {

    return(
        <Center>
            <div>
                <InputGroup>
                    <InputLeftAddon children={<BiSearch />} />
                    <Input width='' variant='outline' placeholder='Search Projects' />   
                </InputGroup>   
            </div>
        </Center>  
    )
}

export default Project