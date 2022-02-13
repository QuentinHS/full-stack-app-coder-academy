import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";

// This component is used to display all the task that the PM needs to either approve or deny as complete
const TasksToApprove = ({tasksList=[]}) =>{
    // Uses state for setting the tasks that will be displayed
    const [show, setShow] = React.useState(false)
    // Shows the list when user clicks on the drop down
    const handleClickShow = () => setShow(!show)
    return (
        <>
            <VStack>
            <Center>
                <Text> Tasks to Approve </Text>
                {/* List of tasks */}
                <IconButton size='sm' ml='8px' aria-label='Show/hide component' icon={<ChevronDownIcon />} onClick={handleClickShow}/>
            </Center>
            <List spacing={3}>
                {/* Maps and displays tasks */}
                {tasksList.map((data, index)=>{
                    if (data){
                        return  show ? (
                            <Center>
                                <ListItem> {data.project.name} {data.stage} { data.name} </ListItem>
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

export default TasksToApprove