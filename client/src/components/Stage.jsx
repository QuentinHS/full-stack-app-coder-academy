import React from "react";
import { Input, InputLeftAddon, InputGroup, Center, Button, Text } from '@chakra-ui/react'
import { AiOutlinePlusCircle, AiFillExclamationCircle } from 'react-icons/ai'
import{ Link } from 'react-router-dom'

const Stage = () => {

    const projectList = {projects: [{address: "123 fake street"}, {address: "555 Evergreen trc"}, {address: "31 Spooner st"}]}
    const pm = {address: "123 fake street", task: [{stageNum: 1, taskNum: 1, trade: "carentry", provider: "Johno's construction"},{stageNum: 2, taskNum: 2, trade: "2 carentry", provider: "2 Johno's construction"}, {stageNum: 3, taskNum: 3, trade: "3 carentry", provider: "7 Johno's construction"}]}

    const currentProject = pm

    return(
        <div>
            <Center>
                <Text mb='1rem' fontSize='3xl' color='teal' as='b'>{currentProject.address}</Text>
            </Center>
            <Center >
                <Link to="/register">
                    <Button leftIcon={<AiOutlinePlusCircle />} mt="1em" width="15rem" colorScheme="teal" variant="outline">Add Stage</Button>
                </Link>
            </Center>
        </div>
    )
}

export default Stage