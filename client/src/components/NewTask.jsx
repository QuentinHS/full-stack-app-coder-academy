import React from "react";
import { Center, Icon,  Heading, IconButton, Alert, AlertDescription, AlertIcon  } from '@chakra-ui/react'

const NewTask = () => {
    return(
        <div>
            
            <Center mb="2rem">
                <Heading fontSize='5xl' color='teal' as='b' >Create New Task</Heading>
            </Center>
            
        </div>
    )
}

export default NewTask