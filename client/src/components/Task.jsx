import React from "react";
import { Center, Icon,  Heading, IconButton } from '@chakra-ui/react'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'

const stageNum = [{stage: [1, 2, 3, 4, 5, 6]}]
const stageInfo = [{incompleteTask: []}, {completeTask: []}]

const Task = () => {
    return(
        <div>
            <Center>
                <Heading>Stage: {stageNum[0].stage[0]}</Heading>
            </Center>
            
        </div>
    )
}

export default Task