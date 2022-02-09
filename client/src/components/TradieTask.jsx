import React from "react";
import { Center, Icon,  Heading, IconButton, Alert, AlertDescription, AlertIcon  } from '@chakra-ui/react'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import CurrentTasksList from "./CurrentTasksList";
import PastTasksList from "./PastTasksList";
import TasksApprovalList from "./TasksApprovalList";

const stageNum = [{stage: [1, 2, 3, 4, 5, 6]}]
const stageInfo = [{incompleteTask: []}, {completeTask: []}]
const currentUserRole = "PM"
const allTasks = ["foo"]

const TradieTask = () => {
    return(
        <div>
            <Center mb="2rem">
                <Heading size='2xl'>Stage: {stageNum[0].stage[0]}</Heading>
            </Center>
            {currentUserRole === 'PM' && 
                <>
                {/* Matbe keep this for tradie as a redo task thing */}
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