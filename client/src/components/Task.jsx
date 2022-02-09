import React from "react";
import { Center, Icon,  Heading, IconButton, Alert, AlertDescription, AlertIcon  } from '@chakra-ui/react'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import CurrentProjectsList from "./CurrentProjectsList";
import PastProjectsList from "./PastProjectsList";

const stageNum = [{stage: [1, 2, 3, 4, 5, 6]}]
const stageInfo = [{incompleteTask: []}, {completeTask: []}]
const currentUserRole = "PM"
const allProjects = ["foo"]

const Task = () => {
    return(
        <div>
            <Center mb="2rem">
                <Heading size='2xl'>Stage: {stageNum[0].stage[0]}</Heading>
            </Center>
            {currentUserRole === 'PM' && 
                <>
                    <Center>
                            <Icon m="1rem" as={BsPlusCircle} />
                            <Link to="/">  Create new Task </Link>
                    </Center>

                    <Center>
                        {/* <TasksToApprove tasksList={needApproval}/> */}
                    </Center>
                </>
            }
            <Center>
                <Alert status='error'>
                    <AlertDescription>You have 
                        {currentUserRole === 'PM' ? 1 : null} tasks requiring attention </AlertDescription>
                    <AlertIcon />
                </Alert>
            </Center>
            <Center>
                <Heading size='md'>Incomplete Tasks</Heading>
            </Center>
           <Center>
               <CurrentProjectsList projectsList={allProjects} />
            </Center>
            
            <Center>
                <Heading size='md'>Complete Tasks</Heading>
            </Center>
           <Center>
               <PastProjectsList projectsList={allProjects} />
           </Center> 
        </div>
    )
}

export default Task