import React from "react";
import { Input, InputLeftAddon, InputGroup, Center, Button, Text, Icon } from '@chakra-ui/react'
import { AiOutlinePlusCircle, AiFillExclamationCircle } from 'react-icons/ai'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import CheckBox from "./CheckBox";


const Stage = () => {

    const projectList = {projects: [{address: "123 fake street"}, {address: "555 Evergreen trc"}, {address: "31 Spooner st"}]}
    const pm = {address: "123 fake street", stage: [{stageNum: 1, taskName: "foo", trade: "carentry", provider: "Johno's construction"},{stageNum: 2, taskName: "bar", trade: "2 carentry", provider: "2 Johno's construction"}, {stageNum: 3, taskName: "blah", trade: "3 carentry", provider: "7 Johno's construction"}]}

    const currentProject = pm

    console.log(currentProject.task)
    return(
        <div>
            <Center>
                <Text mb='1rem' fontSize='3xl' color='teal' as='b'>{currentProject.address}</Text>
            </Center>
            <Center>
                <Icon m="1rem" as={BsPlusCircle} />
                <Link to="/">  Add project Stage </Link>
            </Center>
            <Center>
                <Icon m="1rem" as={BsPlusCircle} />
                <Link to="/">  Add trade provider </Link>
            </Center>
                {currentProject.stage.map(task => 
                    <Center>
                        <CheckBox />
                        <Icon m="1rem" as={BsTrash} />
                        <Text mt='1rem' fontSize='1xl' color='teal' as='b'>Stage: {task.stageNum}</Text>
                    </Center>
            )}
           
        </div>
    )
}

export default Stage