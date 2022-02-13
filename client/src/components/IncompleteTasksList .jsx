import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";

// This component displays the tasks that are not yet complete
const IncompleteTasksList = ({tasksList=[]}) =>{
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
            {/* dropdown list of incomplete tasks */}
                <Text>Incomplete Tasks</Text>
                <IconButton size='sm' ml='12px' aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
            </Center>
            {/* Maps and displays all the tasks */}
            <List spacing={3}>
                {active.map((data, index)=>{
                    if (data){
                        return  show ? (
                            <Center>
                                <ListItem> {data.name} </ListItem>
                            </Center>
                        ): null
                    }
                    return null
                })}
            </List>
        
            </VStack>
        </>
    )
}

export default IncompleteTasksList