import { Center, Text, Icon, Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link as ReachLink} from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";
import api from "../services/api";
import SearchBar from "./SearchBar";
import CurrentProjectsList from "./CurrentProjectsList";
import PastProjectsList from "./PastProjectsList";
import TasksToApprove from "./TasksToApprove";
import projectContext from "../context/projectContext";
import {useCookies} from 'react-cookie'
import { Link } from "react-router-dom";



const ProjectsDashboard = () => {
    const [cookies, setCookie] = useCookies(["user", "role"])
    const currentUserId = cookies.user
    const currentUserRole = cookies.role
    const {projectState, projectDispatch} = useContext(projectContext)
    
    const [input, setInput ] = useState('')
    const [allProjects, setAllProjects] = useState()
    const [allTasks, setAllTasks] = useState()
    
    

    
    // fetch data from DB

    //All projects filtered by user 
   /* useEffect(async () => {
        const res = await api.get('/projects')
            .catch((error)=>{
                console.log(error.response)
            })
        projectDispatch({
          type: "setProjects",
          data: res.data
        })
  //    }, [])*/

    

    // All Tasks 
    // const fetchTasks = async () => {
        
    //     await api.get()
    //          .then((response)=>{
    //              console.log(response)
    //               setAllTasks(response.data)
    //          })
    //  }

    // Filter Tasks to be aproved by Project Manager
    // const needApproval = mockTasks.filter(task => {
    //     return (task.completed && !task.approvedByProjectManager)
    // })

    //Filter Tasks to be completed by 
    // const declined = mockTasks.filter(task =>{
    //     return
    // })
    

    // Update the input of the search bar  

    const updateInput = async (input) =>{
        const filteredList = projectState.filter(project =>{
            return project.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input)
        setAllProjects(filteredList)
    }
    console.log(projectState)

    // Load the data


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
                    <AlertDescription>You have 
                        {currentUserRole === 'project manager' ? 1 : null} tasks requiring attention </AlertDescription>
                    <AlertIcon />
                
                </Alert>
           </Center>
            {currentUserRole === 'project manager' && 
                <>
                    <Center>
                            <Icon m="1rem" as={BsPlusCircle} />
                            <Link as={ReachLink} to="/projects/new">  Create new project </Link>
                    </Center>

                    <Center>
                        {/* <TasksToApprove tasksList={needApproval}/> */}

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