import { Center, Text, Icon, Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";
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
    const mockData = [{name: 'foo', completed: true}, {name: 'bar ', completed: true}, {name: 'yup', completed: false}]
    const mockTasks = [{name: 'Task 1', project: {name: 'p1'}, stage: 'S2', completed: true, approvedByProjectManager: false }, {name: 'Task 2', project: 'P1', stage: 'S2', completed: true, approvedByProjectManager: true}, {name: 'Task 3', project: {name: 'Project 1'}, stage: 'S2', completed: true, approvedByProjectManager: false}]
    const currentUser = {name: 'foo', role: 'project manager'}
    
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

    // All Tasks 
    // const fetchTasks = async () => {
        
    //     await axios.get()
    //          .then((response)=>{
    //              console.log(response)
    //               setAllTasks(response.data)
    //          })
    //  }

    // Filter Tasks to be aproved by Project Manager
    const needApproval = mockTasks.filter(task => {
        return (task.completed && !task.approvedByProjectManager)
    })

    //Filter Tasks to be completed by 
    // const declined = mockTasks.filter(task =>{
    //     return
    // })
    

    // Update the input of the search bar  

    const updateInput = async (input) =>{
        const filteredList = allProjectsDefault.filter(project =>{
            return project.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input)
        setAllProjects(filteredList)
    }

    // Load the data

    // useEffect(()=> {fetchProjecs() fetchTasks()}, [])

    return(
        <>
           <Center>
               <Text fontSize="5xl" color="teal" as="b"> My Projects </Text>
           </Center>

           <Center>
                <SearchBar input={input} onChange={updateInput}/>
           </Center>
           <Center>
                <Alert status='error'>
                    <AlertDescription>You have {currentUser.role === 'project manager' ? needApproval.length : null} tasks requiring attention </AlertDescription>
                    <AlertIcon />
                
                </Alert>
           </Center>
            {currentUser.role === 'project manager' && 
                <>
                    <Center>
                            <Icon m="1rem" as={BsPlusCircle} />
                            <Link href="/">  Create new project </Link>
                    </Center>

                    <Center>
                        <TasksToApprove tasksList={needApproval}/>

                    </Center>
                </>
            }

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