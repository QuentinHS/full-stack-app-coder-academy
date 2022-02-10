import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack, Heading, Button } from "@chakra-ui/react";
import React from "react";
import{ Link } from 'react-router-dom'

const TasksApproval = ({tasksList=[]}) =>{


    const task = {address: "123 Fake street", stage: [{stageNum: 1, taskName: "foo", trade: "carentry", provider: "Johno's construction", complete: false},{stageNum: 2, taskName: "bar", trade: "2 carentry", provider: "2 Johno's construction"}, {stageNum: 3, taskName: "blah", trade: "3 carentry", provider: "7 Johno's construction"}, {stageNum: 5, taskName: "blah", trade: "3 carentry", provider: "7 Johno's construction"}]}

    const currentTask = task

    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show)

   

    return (
        <div>
            <Center>
                <Heading mb='1rem' fontSize='5xl' color='teal' as='b'>Task Approval</Heading>
            </Center>
            <Center >
                <Text mb='1rem' fontSize='md' as='b'>Stage: {currentTask.stage[0].stageNum}</Text>
            </Center>
            <Center >
                <Text mb='1rem' fontSize='3xl' as='b'>Task: {currentTask.stage[0].taskName}</Text>
            </Center>
            <Center >
                <Text mb='1rem' fontSize='2xl' as='b'>Submitted by: {currentTask.stage[0].provider}</Text>
            </Center>


        </div>
    )
}

export default TasksApproval