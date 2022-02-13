import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack, Icon } from "@chakra-ui/react";
import { BsTrash, BsPlusCircle, BsFillExclamationCircleFill } from 'react-icons/bs'
import { BiPackage } from "react-icons/bi"
import React from "react";

// List CurrentTasksList is used to display the list of current tasks
const CurrentTasksList = ({tasksList=[]}) =>{
    // Uses state for setting the tasks that will be displayed
    const [show, setShow] = React.useState(false)
    // Shows the list when user clicks on the drop down
    const handleClickShow = () => setShow(!show)
    const onSite = true
    const eclamation = true
    const active = tasksList.filter(tasks => {
        return tasks.completed === false
    })
    return (
        <>
            <VStack>
            <Center>
                <Text>My Tasks</Text>
                {/* List of tasks */}
                <IconButton size='sm'  mr="2rem" ml='12px' aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
                {/* If true the Eclimation will show */}
                {eclamation ? <Icon mr="1rem" as={BsFillExclamationCircleFill} /> : null}
                {/* If true the Package will show */}
                {eclamation ? <Icon mr="1rem" as={BiPackage} /> : null}
            </Center>
            {/* Maps and displays tasks */}
            <List spacing={3}>
                {active.map((data, index)=>{
                    if (data){
                        return  show ? (
                            <Center>
                                <ListItem> {data.name}{} </ListItem>
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

export default CurrentTasksList