import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack, Icon } from "@chakra-ui/react";
import { BsTrash, BsPlusCircle, BsFillExclamationCircleFill } from 'react-icons/bs'
import { BiPackage } from "react-icons/bi"
import React from "react";

const CurrentTasksList = ({tasksList=[]}) =>{

    const [show, setShow] = React.useState(false)
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
                <IconButton size='sm'  mr="2rem" ml='12px' aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
                {eclamation ? <Icon mr="1rem" as={BsFillExclamationCircleFill} /> : null}
                {eclamation ? <Icon mr="1rem" as={BiPackage} /> : null}
            </Center>

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