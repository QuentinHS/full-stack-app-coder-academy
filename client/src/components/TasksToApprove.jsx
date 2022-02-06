import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";

const TasksToApprove = ({tasksList=[]}) =>{

    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show)

   

    return (
        <>
            <VStack>

            <Center>

                <Text> Tasks to Approve </Text>
                <IconButton size='sm' ml='8px' aria-label='Show/hide component' icon={<ChevronDownIcon />} onClick={handleClickShow}/>
            </Center>

            <List spacing={3}>
                {tasksList.map((data, index)=>{
                    if (data){
                        return  show ? (
                            <Center>
                                <ListItem> {data.project.name} {data.stage} { data.name} </ListItem>
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

export default TasksToApprove