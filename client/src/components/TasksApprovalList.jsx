import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";

// List TasksApprovalList is used to display the list of tasks awaiting approval
const TasksApprovalList = ({tasksList=[]}) =>{
    // Uses state for setting the tasks that will be displayed
    const [show, setShow] = React.useState(false)
    // Shows the list when user clicks on the drop down
    const handleClickShow = () => setShow(!show)
    // filters the task list 
    const active = tasksList.filter(tasks => {
        return tasks.completed === false
    })
    return (
        <>
            <VStack>
            <Center>
            {/* List of tasks */}
                <Text>Tasks Pending Approval</Text>
                <IconButton size='sm' ml='12px' aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
            </Center>
            {/* Maps and displays tasks */}
            <List spacing={3}>
                {active.map((data, index)=>{
                    if (data){
                        return  show ? (
                            <Center>
                                <ListItem> {data.name} </ListItem>
                            </Center>
                        // if there is no data it does not render anything
                        ): null
                    }
                    return null
                })}
            </List>
            </VStack>
        </>
    )
}

export default TasksApprovalList