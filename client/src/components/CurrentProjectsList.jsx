import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";

const CurrentProjectsList = ({projectsList=[]}) =>{

    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show)

    const active = projectsList.filter(projects => {
        return projects.completed === false
    })

    return (
        <>
            <VStack>

            <Center>

                <Text>Current Projects</Text>
                <IconButton size='sm' ml='12px' aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
            </Center>

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

export default CurrentProjectsList