import { ChevronDownIcon } from "@chakra-ui/icons";
import { IconButton, List, ListItem } from "@chakra-ui/react";
import React from "react";

const CurrentProjectsList = ({activeProjectsList=[]}) =>{

    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show)

    return (
        <>
            <Text>Current Projects</Text>
            <IconButton aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
            <List spacing={3}>
                {activeProjectsList.map((data, index)=>{
                    if (data){
                        return  show ? (
                            <ListItem> {data.name} </ListItem>
                        ): null
                    }
                    return null
                })}
            </List>
        
        </>
    )
}

export default CurrentProjectsList