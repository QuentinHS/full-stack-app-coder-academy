import { Center, Text, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";
import api from "../services/api";
import SearchBar from "./SearchBar";
import axios from "axios";

const ProjectsDashboard = () => {

    const [input, setInput ] = useState('')
    const [currentProjectsDefault, setCurrentProjectsDefault] = useState()
    const [currentProjects, setCurrentProjects] = useState()

    // axios.get()
    //     .then((response)=>{
    //         console.log(response)
    //         const allProjects = response.data
    //     })


    return(
        <>
           <Center>
               <Text fontSize="5xl" color="teal" as="b"> Projects </Text>
           </Center>
           <Center>
                <SearchBar/>
           </Center>
           <Center>
                <Icon m="1rem" as={BsPlusCircle} />
                <Link href="/">  Create new project </Link>
           </Center>

            
        </>
    )
}

export default ProjectsDashboard