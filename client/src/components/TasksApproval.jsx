import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack, Heading, Button, Textarea, Stack, Checkbox } from "@chakra-ui/react";
import React from "react";
import{ Link } from 'react-router-dom'

// This is where tasks go to be approved by PM
const TasksApproval = ({tasksList=[]}) =>{

    const task = {address: "123 Fake street", stage: [{stageNum: 1, taskName: "foo", trade: "carentry", provider: "Johno's construction", complete: false},{stageNum: 2, taskName: "bar", trade: "2 carentry", provider: "2 Johno's construction"}, {stageNum: 3, taskName: "blah", trade: "3 carentry", provider: "7 Johno's construction"}, {stageNum: 5, taskName: "blah", trade: "3 carentry", provider: "7 Johno's construction"}]}
    const currentTask = task
    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show)
    const [checkedItems, setCheckedItems] = React.useState([false, false ])


    return (
        <div>
            <Center>
                <Heading mb='1rem' fontSize='5xl' color='teal' as='b'>Task Approval</Heading>
            </Center>
            <Center >
                {/* displays stage that task is in */}
                <Text mb='1rem' fontSize='md' as='b'>Stage: {currentTask.stage[0].stageNum}</Text>
            </Center>
            <Center >
                {/* display task name */}
                <Text mb='1rem' fontSize='3xl' as='b'>Task: {currentTask.stage[0].taskName}</Text>
            </Center>
            <Center >
                <Text  fontSize='xl' as='b'>Submitted by: {currentTask.stage[0].provider}</Text>
            </Center>
            <Center>
                {/* text area for task description */}
                <Textarea width='80%'  placeholder='Task Description' />
            </Center>
            <Center mt="2rem">
                <Text mb='1rem' fontSize='1xl' as='b'>Attached Images</Text>
            </Center>
            <Center>
                {/* text area incase task is not approved PM can add description as to why no approved */}
                <Textarea width='80%'  placeholder='Reasons task was declined' />
            </Center>
            <Center m="1rem" >
                <Stack spacing={5} direction='row'>
                    <Center>
                    {/* checkbox for approving the task as complete */}
                    <Checkbox 
                    spacing="1rem"
                        isChecked={checkedItems[0]}
                        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[0]])}>
                        Approve Task
                    </Checkbox>
                    {/* chackbox for denying the task as complete */}
                    <Checkbox 
                    spacing="1rem"
                        isChecked={checkedItems[1]}
                        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}>
                        Decline Approval
                    </Checkbox>
                    </Center>
                </Stack>
            </Center>
            {/* submit button for answer task completion */}
            <Center>
                <Button mt='2rem' w='20rem'colorScheme='teal' type='submit' >Submit</Button>
            </Center>
        </div>
    )
}

export default TasksApproval