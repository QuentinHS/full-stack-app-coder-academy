import React from "react";
import { Center, Icon,  Heading, IconButton, Alert, AlertDescription, AlertIcon  } from '@chakra-ui/react'
import { BsTrash, BsPlusCircle, BsFillExclamationCircleFill } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import CurrentTasksList from "./CurrentTasksList";
import PastTasksList from "./PastTasksList";
import TasksApprovalList from "./TasksApprovalList";

const projectAddress = [{address: "123 Fake street"}]
const stageNum = [{stage: [1, 2, 3, 4, 5, 6]}]
const stageInfo = [{incompleteTask: []}, {completeTask: []}]
const currentUserRole = "tradie"
const allTasks = ["foo"]

// This is for the trade providers tasks
const TradieTask = () => {
    return(
        <div>
            {/* displays the project address as a means of identifying the project */}
            <Center mb="2rem">
                <Heading fontSize='5xl' color='teal' as='b'>Address: {projectAddress[0].address}</Heading>
            </Center>
            {/* displays the specified stage */}
            <Center mb="2rem">
                <Heading fontSize='2xl' color='teal' as='b'>Stage: {stageNum[0].stage[0]}</Heading>
            </Center>
            <Center>
                <Alert  status='error'>
                    {/* This displays tasks that require attention from the user */}
                    <AlertDescription mr="2rem">You have 
                        {currentUserRole === 'tradie' ? 1 : null} tasks requiring attention </AlertDescription>
                    <AlertIcon  />
                </Alert>
            </Center>
           <Center m="1rem">
               {/* Displays list of the task that are yet to be completed */}
               <CurrentTasksList tasksList={allTasks} />
            </Center>
           <Center m="1rem">
               {/* Displays list of the task that are yet to be approved */}
               <TasksApprovalList tasksList={allTasks} />
           </Center> 
           <Center m="1rem">
               {/* Displays list of the task that are already complete */}
               <PastTasksList tasksList={allTasks} />
           </Center> 
        </div>
    )
}

export default TradieTask