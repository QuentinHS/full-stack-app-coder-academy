import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";

// This is where the completed tasks are listed once they are approved by PM
const PastTasksList = ({tasksList=[]}) =>{
    // Uses state for setting the tasks that will be displayed
    const [show, setShow] = React.useState(false)
    // Shows the list when user clicks on the drop down
    const handleClickShow = () => setShow(!show)
    // filters the tasks list
    const past = tasksList.filter(tasks => {
        return tasks.completed === true
    })

    return (
        <>
            <VStack>

            <Center>

                <Text>Completed Tasks</Text>
                <IconButton size='sm' ml='30px' aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
            </Center>

            <List spacing={3}>
                {past.map((data, index)=>{
                    if (data){
                        return  show ? (
                            <Center>
                                <ListItem > {data.name} </ListItem>
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

export default PastTasksList