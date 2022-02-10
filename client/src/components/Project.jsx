import React, { useContext } from "react";
import api from "../services/api";
import { Input, InputLeftAddon, InputGroup, Center, Button, Text } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import { AiOutlinePlusCircle, AiFillExclamationCircle } from 'react-icons/ai'
import{ Link } from 'react-router-dom'
import { useParams } from "react-router";
import appContext from "../context/appContext";

const pm = {address: "123 fake street", task: [{stageNum: 1, taskNum: 1, trade: "carentry", provider: "Johno's construction"},{stageNum: 2, taskNum: 2, trade: "2 carentry", provider: "2 Johno's construction"}, {stageNum: 3, taskNum: 3, trade: "3 carentry", provider: "7 Johno's construction"}]}
const currentProject = pm

const projectList = {projects: [{address: "123 fake street"}, {address: "555 Evergreen trc"}, {address: "31 Spooner st"}]}
const completedProjectList = {projects: [{address: "Foo"}, {address: "Bar"}, {address: "Blah"}]}




const Project = () => {
    const params = useParams()
    
    
    const {state: {projects, curretUser}, dispatch} = useContext(appContext)
    
    
    
    return(
        <div>
            <Center>
                <Text mb='1rem' fontSize='3xl' color='teal' as='b'>{currentProject.address}</Text>
            </Center>
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
                    <Button leftIcon={<AiOutlinePlusCircle />} mt="1em" width="15rem" colorScheme="teal" variant="outline">Create New Project</Button>
                </Link>
            </Center>
            <Center>
                <Text mt='1rem' fontSize='2xl' color='teal' as='b'>Tasks to Approve</Text>
            </Center>
            <Center >
                {/* Need to show individual Tasks */}
                    <ol>
                        {currentProject.task.map((task, index) => 
                        // will need to be user id through params
                            <li key={index} ><Link to="/register"><Button mt="1em" width="15rem" colorScheme="teal" variant="outline">{task.provider}</Button></Link></li>
                        )}
                    </ol> 
            </Center>
            <Center>
                <Text mt='1rem' fontSize='2xl' color='teal' as='b'>Current Projects</Text>
            </Center>
            <Center >
                {/* May need to sort by date*/}
                    <ol>
                        {projectList.projects.map((project, id) => 
                        // will need to be project id through params
                            <li key={id} ><Link to="/register"><Button mt="1em" width="15rem" colorScheme="teal" variant="outline">{project.address}</Button></Link></li>
                        )}
                    </ol> 
            </Center>
            <Center>
                <Text mt='1rem' fontSize='2xl' color='teal' as='b'>Completed Projects</Text>
            </Center>
            <Center >
                {/* May need to sort by date*/}
                    <ol>
                        {completedProjectList.projects.map((project, id) => 
                        // will need to be project id through params
                            <li key={id} ><Link to="/register"><Button mt="1em" width="15rem" colorScheme="teal" variant="outline">{project.address}</Button></Link></li>
                        )}
                    </ol> 
            </Center>
        </div>
    )
}
{/* <Text mb='1rem' fontSize='2xl' color='teal' as='b'>Projet</Text> */}

export default Project