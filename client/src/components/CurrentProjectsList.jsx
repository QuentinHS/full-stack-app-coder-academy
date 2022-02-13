import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, IconButton, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

// List CurrentProjectsList is used to display the list of current projects
const CurrentProjectsList = ({projectList=[]}) =>{
    // Uses state for setting the projects that will be displayed
    const [show, setShow] = React.useState(false)
    // Shows the list when user clicks on the drop down
    const handleClickShow = () => setShow(!show)
    // filters the project list as the user enters input into the search field
    const active = projectList.filter(projects => {
        return projects.completed === false
    })
    return (
        <>
            <VStack>
            <Center m="1rem">
                <Text>Current Projects</Text>
                <IconButton size='sm' ml='12px' aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
            </Center>
            <List spacing={3}>
                {active.map((data, index)=>{
                    if (data){
                        return  show ? (
                            <Center>
                                {/* links to the specified project */}
                                <Link to={`/projects/${data._id}`}>
                                    <ListItem> {data.name} </ListItem>
                                </Link>
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