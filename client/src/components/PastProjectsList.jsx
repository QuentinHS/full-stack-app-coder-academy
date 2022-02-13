import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";

// This is where the completed projects are listed once they are approved by PM
const PastProjectsList = ({projectList=[]}) =>{
   
    // Uses state for setting the projects  that will be displayed
    const [show, setShow] = React.useState(false)
    // Shows the list when user clicks on the drop down
    const handleClickShow = () => setShow(!show)
    // filters the projects list
    const past = projectList.filter(projects => {
        return projects.completed === true
    })
    return (
        <>
            <VStack>
            <Center>
                <Text>Past Projects</Text>
                {/* dropdown list of projects */}
                <IconButton size='sm' ml='30px' aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
            </Center>
            <List spacing={3}>
                {/* Maps and displays projects */}
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

export default PastProjectsList