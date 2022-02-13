import { Center, Text, Icon, Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link as ReachLink} from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";
import api from "../services/api";
import SearchBar from "./SearchBar";
import CurrentProjectsList from "./CurrentProjectsList";
import PastProjectsList from "./PastProjectsList";
import TasksToApprove from "./TasksToApprove";
import appContext from "../context/appContext";
import {useCookies} from 'react-cookie'
import { Link } from "react-router-dom";

const ProjectsDashboard = () => {
    const [cookies, setCookie] = useCookies(["user", "role"])
    const currentUserId = cookies.user
    const currentUserRole = cookies.role
    const {state: {projects, curretUser}, dispatch} = useContext(appContext)
    const [input, setInput ] = useState('')
    const [allProjects, setAllProjects] = useState()
    const [allTasks, setAllTasks] = useState()
    // fetch user data from DB
      useEffect(async () => {
        const res = await api.get('/showMe', {withCredentials: true})
        dispatch({
          type: "setCurrentUser",
          data: res.data.user
        })
    }, [])
    //All projects filtered by user 
    useEffect(async () => {
        const res = await api.get('/projects', {withCredentials: true})
            .catch((error)=>{
                console.log(error.response)
            })
            dispatch({
                type: "setProjects",
                data: res.data.projects
              })
            setAllProjects(res.data.projects)
     }, [])
    //  uses asyn fucntion to update input
    const updateInput = async (input) =>{
        const filteredList = projects.filter(project =>{
            return project.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input)
        setAllProjects(filteredList)
    }
    return(
        <>
           <Center>
               <Text fontSize="5xl" color="teal" as="b"> My Projects </Text>
           </Center>
           <Center>
               {/* change handler to update input */}
                <SearchBar input={input} onChange={updateInput}/>
           </Center>
           <Center>
               {/* uses chakra alert for error handling */}
                <Alert status='error'>
                    <AlertDescription>You have
                        {currentUserRole === 'project manager' ? projects.length : null} tasks requiring attention </AlertDescription>
                    <AlertIcon />
                </Alert>
           </Center>
           {/* This is restricted to only project managers */}
            {currentUserRole === 'project manager' && 
                <>
                    <Center>
                        {/* Projcet manager can create a new project */}
                            <Icon boxSize={6} m="1rem" as={BsPlusCircle} />
                            <Link as={ReachLink} to="/projects/new">  Create new project </Link>
                    </Center>
                    <Center>
                        {/* <TasksToApprove tasksList={needApproval}/> */}

                    </Center>
                </>
            }
            <Center>
               {/* Uses state to display list of all projects assigned to user */}
               <CurrentProjectsList projectList ={allProjects}/>
            </Center>
            <Center>
            {/* Uses state to display list of all complete projects assigned to user */}
               <PastProjectsList projectList ={allProjects} />
            </Center>
        </> 
    )
}

export default ProjectsDashboard