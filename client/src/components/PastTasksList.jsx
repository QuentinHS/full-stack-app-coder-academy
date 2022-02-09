import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";


const PastTasksList = ({tasksList=[]}) =>{

    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show)

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