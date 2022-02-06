import { Center, Text, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";
import api from "../services/api";
import SearchBar from "./SearchBar";
import axios from "axios";
import { set } from "react-hook-form";
import CurrentProjectsList from "./CurrentProjectsList";
import PastProjectsList from "./PastProjectsList";
import TasksToApprove from "./TasksToApprove";

const ProjectsDashboard = () => {
    const mockData = [{name: 'foo', complete: true}, {name: 'bar ', complete: true}, {name: 'yup', complete: false}]
    const mockTasks = [{name: 'Task 1', project: 'P1', stage: 'S2', complete: false}, {name: 'Task 1', project: 'P1', stage: 'S2', complete: true}, {name: 'Task 1', project: 'P1', stage: 'S2', complete: false}]
    const [input, setInput ] = useState('')
    const [allProjectsDefault, setAllProjectsDefault] = useState(mockData)
    const [allProjects, setAllProjects] = useState(mockData)
    const [allTasks, setAllTasks] = useState(mockTasks)
    

    
    // fetch data from DB

    //All projects
    // const fetchProjects  = async () => {
        
    //    await axios.get()
    //         .then((response)=>{
    //             console.log(response)
    //              setAllProjectsDefault(response.data)
    //             setAllProjects(response.data)
    //         })
    // }

    // Tasks to approve
    // const fetchTasks   = async () => {
        
    //     await axios.get()
    //          .then((response)=>{
    //              console.log(response)
    //               setAllTasks(response.data)
    //          })
    //  }

    

    // Update the input of the search bar  

    const updateInput = async (input) =>{
        const filteredList = allProjectsDefault.filter(project =>{
            return project.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input)
        setAllProjects(filteredList)
    }

    // Load the data

    // useEffect(()=> {fetchData()}, [])

    return(
        <>
           <Center>
               <Text fontSize="5xl" color="teal" as="b"> Projects </Text>
           </Center>

           <Center>
                <SearchBar input={input} onChange={updateInput}/>
           </Center>

           <Center>
                <Icon m="1rem" as={BsPlusCircle} />
                <Link href="/">  Create new project </Link>
           </Center>

           <Center>
               <TasksToApprove tasksList={mockTasks}/>

           </Center>

           <Center>
               <CurrentProjectsList projectsList={allProjects}/>
           </Center>
           <Center>
               <PastProjectsList projectsList={allProjects} />
           </Center>

            
        </>
    )
}

export default ProjectsDashboard