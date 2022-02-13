import React, { useContext , useEffect} from "react";
import { Center, Text, Icon, Checkbox, Stack, IconButton, Heading, Alert, AlertDescription } from '@chakra-ui/react'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import { useParams } from "react-router";
import appContext from "../context/appContext";
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router";
import { BiErrorCircle } from "react-icons/bi";
import AlertComponent from "./AlertComponent";






const Project = () => {
    const {state: {projects, currentUser, stages, alert}, dispatch} = useContext(appContext)
    const params = useParams()
    //current project 
    const currentProject = projects.find(({_id})=> _id === params.id)
    //stages check boxes
    const [checkedItems, setCheckedItems] = useState(false)
    const [alertState, setAlertState] = useState('')
    const navigate = useNavigate()
    const [componentStages, setComponentStages] = useState([])
    
    // get stages from this project 
    useEffect(async ()=>{
        const response = await api.get(`/projects/${params.id}/stages`, {withCredentials: true})
        dispatch({
            type: "setStages",
            data: response.data.stages
        })
        setComponentStages(response.data.stages)
           
    }, [])

    //post request to delete project 

     const handleDeleteProject = async () =>{
        const res = await api.delete(`/projects/${params.id}`, {withCredentials: true})
            .then((res) =>{  
                console.log(res.data)
                dispatch({
                    type: "setSuccessAlert",
                    data: "Your project has been successfully deleted "
                })

                setAlertState('success')
                navigate("/projects")
            }
                )
            .catch((error) => {
                console.log(error) 
                dispatch({
                    type: "setErrorAlert",
                    data: error.message
                })
                setAlertState('error')
        
            })
    }
    const handleDeleteStage = async (stageId) =>{
        const res = await api.delete(`/projects/${params.id}/stages/${stageId}`, {withCredentials: true})
            .then((res) =>{  
                console.log(res.data)
                dispatch({
                    type: "setSuccessAlert",
                    data: "Your stage has been successfully deleted "
                })
                // setComponentStages(componentStages.filter(stage => stage._id !== stageId ))
            }
                )
            .catch((error) => {
                console.log(error) 
                dispatch({
                    type: "setErrorAlert",
                    data: error.message
                })
        
            })
    }


    // const handleCheckedStage = async (stageId, stageName) =>{
    //     const res = await api.patch(`/projects/${params.id}/stages/${stageId}`, {withCredentials: true, id: stageId, name: stageName})
    //     .then((res)=>{
    //         console.log(res.data)
                              
    //     })
    //     .catch((error)=>{
    //         console.log(error.message)
    //     })

    // }
    // console.log(alert)




    // console.log(currentProject)
    // console.log(alert)
 
    
    
    
    

    return currentProject ? (
        
        <>
        {/* {alert.success &&
        <AlertComponent alertState='success' alertMessage={alert.success}/>
        }
        {alert.error && <AlertComponent alertState='error' alertMessage={alert.success}/>}
        */}

            {currentUser.role === "project manager" ? 
                    <>
                        <Center>
                            <Heading mb='1rem' fontSize='5xl' color='teal' as='b'>{currentProject.address}</Heading>
                        </Center>
                        <Center>
                            <Icon boxSize={6} m="1rem" as={BsPlusCircle} />
                            <Link to={`/projects/${params.id}/stages/new`}>  Add project Stage </Link>
                        </Center>
                        <Center>
                            <Icon boxSize={6} m="1rem" as={BsPlusCircle} />
                            <Link to="/">  Add trade provider </Link>
                        </Center >
                        <Center m="1rem">
                            <Link to="/">  View trade Providers </Link>
                        </Center >
                    </>
                
                : null }
                
 
            
            <Center mt="2rem"> 
        
        
                <ul >
                    { stages  ? stages.map((stage, index) => 
                        <Center key={index} m="1rem" >
                            <Stack spacing={5} direction='row'>
                                <IconButton aria-label='delete stage' onClick={()=>handleDeleteStage(stage._id)} icon={<BsTrash />} />
                                <Checkbox 
                                value={stage._id}
                                spacing="1rem"
                                    isChecked = {checkedItems[index]}
                                    onChange ={e => setCheckedItems(e.target.checked) }
                                    >
                                   <Link to={`/projects/${params.id}/stages/${stage._id}/tasks`}>Stage: {stage.name}</Link> 
                                </Checkbox>
                            </Stack>
                        </Center>
                    ): null}
                </ul>
            </Center>
            <Center mt="3rem">
            <IconButton m="1rem" aria-label='' icon={<BsTrash />} onClick={handleDeleteProject} />
                <Link to="/projects" onClick={handleDeleteProject}>  Delete Project </Link>
            </Center >
        </>
    ) : (<Text>Page not found </Text>)
}

export default Project