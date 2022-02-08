import React from "react";
import { Input, InputLeftAddon, InputGroup, Center, Button, Text, Icon, Checkbox, Stack } from '@chakra-ui/react'
import { AiOutlinePlusCircle, AiFillExclamationCircle } from 'react-icons/ai'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import { useEffect, useState } from "react";


const Stage = () => {

    const projectList = {projects: [{address: "123 Fake street"}, {address: "555 Evergreen trc"}, {address: "31 Spooner st"}]}
    const pm = {address: "123 Fake street", stage: [{stageNum: 1, taskName: "foo", trade: "carentry", provider: "Johno's construction", complete: false},{stageNum: 2, taskName: "bar", trade: "2 carentry", provider: "2 Johno's construction"}, {stageNum: 3, taskName: "blah", trade: "3 carentry", provider: "7 Johno's construction"}, {stageNum: 5, taskName: "blah", trade: "3 carentry", provider: "7 Johno's construction"}]}

    const currentProject = pm

    const [checkedItems, setCheckedItems] = React.useState( new Array(currentProject.stage.length).fill(false))

    console.log(checkedItems)

    return(
        <div>
            <Center>
                <Text mb='1rem' fontSize='3xl' color='teal' as='b'>{currentProject.address}</Text>
            </Center>
            <Center>
                <Icon boxSize={6} m="1rem" as={BsPlusCircle} />
                <Link to="/">  Add project Stage </Link>
            </Center>
            <Center>
                <Icon boxSize={6} m="1rem" as={BsPlusCircle} />
                <Link to="/">  Add trade provider </Link>
            </Center >
            <Center m="1rem">
                <Link to="/">  View trade Providers </Link>
            </Center >
            <Center mt="2rem">
                <ul >
                    {currentProject.stage.map((stage, index) => 
                        <Center key={index}  >
                            <Stack spacing={5} direction='row'>
                                <Icon m="1rem" as={BsTrash} />
                                <Checkbox 
                                spacing="1rem"
                                    isChecked={checkedItems[index]}
                                    onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}>
                                    Stage: {stage.stageNum}
                                </Checkbox>
                            </Stack>
                        </Center>
                    )}
                </ul>
            </Center>
            <Center mt="3rem">
                <Icon m="1rem" as={BsTrash} />
                <Link to="/">  Delete Project </Link>
            </Center >
        </div>
    )
}

export default Stage