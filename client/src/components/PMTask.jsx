import React from "react";
import { Center, Icon,  Heading, IconButton, Alert, AlertDescription, AlertIcon  } from '@chakra-ui/react'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import CurrentTasksList from "./CurrentTasksList";
import PastTasksList from "./PastTasksList";
import IncompleteTasksList from "./IncompleteTasksList ";

const stageNum = [{stage: [1, 2, 3, 4, 5, 6]}]
const stageInfo = [{incompleteTask: []}, {completeTask: []}]
const currentUserRole = "PM"
const allTasks = ["foo"]

const PMTask = () => {
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
            <Center m="1rem">
                <Alert status='error'>
                    <AlertDescription mr="1rem">You have 
                        {currentUserRole === 'PM' ? 1 : null} tasks requiring attention </AlertDescription>
                    <AlertIcon />
                </Alert>
            </Center>
           <Center m="1rem">
               <IncompleteTasksList tasksList={allTasks} />
            </Center>
           <Center m="1rem">
               <PastTasksList tasksList={allTasks} />
           </Center> 
        </div>
    )
}

export default PMTask