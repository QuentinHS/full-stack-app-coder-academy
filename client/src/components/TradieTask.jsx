import React from "react";
import { Center, Icon,  Heading, IconButton, Alert, AlertDescription, AlertIcon  } from '@chakra-ui/react'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import CurrentTasksList from "./CurrentTasksList";
import PastTasksList from "./PastTasksList";
import TasksApprovalList from "./TasksApprovalList";

const projectAddress = [{address: "123 Fake street"}]
const stageNum = [{stage: [1, 2, 3, 4, 5, 6]}]
const stageInfo = [{incompleteTask: []}, {completeTask: []}]
const currentUserRole = "tradie"
const allTasks = ["foo"]

const TradieTask = () => {
    return(
        <div>
            <Center mb="2rem">
                <Heading size='2xl'>Address: {projectAddress[0].address}</Heading>
            </Center>
            <Center mb="2rem">
                <Heading size='lg'>Stage: {stageNum[0].stage[0]}</Heading>
            </Center>
            {currentUserRole === 'tradie' && 
                <>
   

                    <Center>
                        {/* <TasksToApprove tasksList={needApproval}/> */}
                    </Center>
                </>
            }
            {/* Matbe keep this for tradie as a redo task thing */}
            <Center>
                <Alert status='error'>
                    <AlertDescription>You have 
                        {currentUserRole === 'tradie' ? 1 : null} tasks requiring attention </AlertDescription>
                    <AlertIcon />
                </Alert>
            </Center>
            <Center>
                <Heading size='md'>My Tasks</Heading>
            </Center>
           <Center>
               <CurrentTasksList tasksList={allTasks} />
            </Center>
            
            <Center>
                <Heading size='md'>Tasks Pending Approval</Heading>
            </Center>
           <Center>
               <TasksApprovalList tasksList={allTasks} />
           </Center> 
            <Center>
                <Heading size='md'>Complete Tasks</Heading>
            </Center>
           <Center>
               <PastTasksList tasksList={allTasks} />
           </Center> 
        </div>
    )
}

export default TradieTask