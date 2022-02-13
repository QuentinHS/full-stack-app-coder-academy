import React, { useContext , useEffect} from "react";
import { Center, Text, Icon, Checkbox, Stack, IconButton, Heading } from '@chakra-ui/react'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import { useParams } from "react-router";
import appContext from "../context/appContext";
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router";

// The individual project page
const Project = () => {
    const {state: {projects, currentUser, stages}, dispatch} = useContext(appContext)
    const params = useParams()
    //current project 
    const currentProject = projects.find(({_id})=> _id === params.id)
    //stages check boxes
    const [checkedItems, setCheckedItems] = useState(false)
    const [errorr, setError] = useState(false )
    const navigate = useNavigate()
    // get stages from this project 
    useEffect(async ()=>{
        const response = await api.get(`/projects/${params.id}/stages`, {withCredentials: true})
        console.log(response.data)
        dispatch({
            type: "setStages",
            data: response.data.stages
        })
    }, [])
    //post request to delete project 
     const handleDeleteProject = async () =>{
        const res = await api.delete(`/projects/${params.id}`, {withCredentials: true})
            .then(
                console.log(res.data),
                navigate("/projects")
                )
            .catch((error) => {
                console.log(error) 
                setError(true)
            })
    }
    // conditional on there being a currentProject
    return currentProject ? (
        <>
            {currentUser.role === "project manager" ? 
                    <>
                        <Center>
                            <Heading mb='1rem' fontSize='5xl' color='teal' as='b'>{currentProject.address}</Heading>
                        </Center>
                        <Center>
                            {/* project manager can add a stage */}
                            <Icon boxSize={6} m="1rem" as={BsPlusCircle} />
                            <Link to={`/projects/${params.id}/stages/new`}>  Add project Stage </Link>
                        </Center>
                        <Center>
                            {/* project manager can add a trade provider */}
                            <Icon boxSize={6} m="1rem" as={BsPlusCircle} />
                            <Link to="/">  Add trade provider </Link>
                        </Center >
                        <Center m="1rem">
                            {/* project manager can avuew a trade provider */}
                            <Link to="/">  View trade Providers </Link>
                        </Center >
                    </>
                // If not a PM they do not have the above options
                : null }
            <Center mt="2rem"> 
                <ul >
                    {/* maps and displays the relavant stages */}
                    { stages.length > 0 ? stages.map((stage, index) => 
                        <Center key={index} m="1rem" >
                            <Stack spacing={5} direction='row'>
                                {/* Uses the bin icon as a delete button */}
                                <IconButton aria-label='Search database' icon={<BsTrash />} />
                                <Checkbox 
                                value ={stage._id}
                                spacing="1rem"
                                    isChecked = {checkedItems[index]}
                                    onChange ={ (e) => setCheckedItems(e.target.checked)}
                                    >
                                    Stage: {stage.name}
                                </Checkbox>
                            </Stack>
                        </Center>
                    ): null}
                </ul>
            </Center>
            <Center mt="3rem">
            {/* Uses the bin icon as a delete button */}
            <IconButton m="1rem" aria-label='' icon={<BsTrash />} onClick={handleDeleteProject} />
                <Link to="/projects" onClick={handleDeleteProject}>  Delete Project </Link>
            </Center >
        </>
        // If no currentProject will render "Page not found"
    ) : (<Text>Page not found </Text>)
}

export default Project