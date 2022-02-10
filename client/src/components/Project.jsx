import React, { useContext } from "react";
import { Center, Text, Icon, Checkbox, Stack, IconButton, Heading } from '@chakra-ui/react'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import { useParams } from "react-router";
import appContext from "../context/appContext";
import { useState } from "react";





const Project = () => {
    const {state: {projects, curretUser}, dispatch} = useContext(appContext)
    const params = useParams()
    const currentProject = projects.find(({_id})=> _id === params.id)
   
    console.log(currentProject)
    
    
    
    
    // const [checkedItems, setCheckedItems] = React.useState( new Array(currentProject.stage.length).fill(false))

    return(
        <div>
            <Center>
                <Heading mb='1rem' fontSize='5xl' color='teal' as='b'>{currentProject.address}</Heading>
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
                    { currentProject.stages.length > 0 ? currentProject.stage.map((stage, index) => 
                        <Center key={index} m="1rem" >
                            <Stack spacing={5} direction='row'>
                                <IconButton aria-label='Search database' icon={<BsTrash />} />
                                <Checkbox 
                                spacing="1rem"
                                    isChecked={checkedItems[index]}
                                    onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}>
                                    Stage: {stage.stageNum}
                                </Checkbox>
                            </Stack>
                        </Center>
                    ): null}
                </ul>
            </Center>
            <Center mt="3rem">
            <IconButton m="1rem" aria-label='' icon={<BsTrash />} />
                <Link to="/">  Delete Project </Link>
            </Center >
        </div>
    )
}

export default Project