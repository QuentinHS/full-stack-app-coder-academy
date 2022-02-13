import React, { useContext } from "react";
import { Center, Icon,  Heading, IconButton, Alert, AlertDescription, AlertIcon  } from '@chakra-ui/react'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import CurrentTasksList from "./CurrentTasksList";
import PastTasksList from "./PastTasksList";
import IncompleteTasksList from "./IncompleteTasksList ";
import { useParams } from "react-router";
import appContext from "../context/appContext";



const PMTask = () => {
    const {state:{ stages, currentUser}, dispatch} = useContext(appContext)
    const params = useParams()
    const currentStage = stages.find(({_id})=> _id === params.id)
    console.log(currentUser)

    return(
        <div>
            <Center mb="2rem">
                <Heading fontSize='5xl' color='teal' as='b'>Stage: {currentStage.name}</Heading>
            </Center>
            {currentUser.role === 'project manager' && 
                <>
                    <Center>
                            <Icon m="1rem" as={BsPlusCircle} />
                            <Link to="/projects/:id/stages/:id/tasks/new">  Create new Task </Link>
                    </Center>

                    <Center>
                        {/* <TasksToApprove tasksList={needApproval}/> */}
                    </Center>
                </>
            }
            <Center m="1rem">
                <Alert status='error'>
                    <AlertDescription mr="1rem">You have  tasks requiring attention </AlertDescription>
                    <AlertIcon />
                </Alert>
            </Center>
           <Center m="1rem">
               {/* <IncompleteTasksList  /> */}
            </Center>
           <Center m="1rem">
               {/* <PastTasksList  /> */}
           </Center> 
        </div>
    )
}

export default PMTask