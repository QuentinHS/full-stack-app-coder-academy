import { Button, Center, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea } from "@chakra-ui/react"
import react, { useEffect } from 'react'
import {useContext} from 'react '
import appContext from '../context/appContext'
import { useNavigate } from "react-router"
import { Form, useFormik } from "formik"
import validate from "../validation/newStageValidation"
import NewTask from "./NewTask"
import { useParams } from "react-router"
import api from "../services/api"

const NewStage = () =>{



    const {state: {projects, stages}, dispatch} = useContext(appContext)
    const navigate = useNavigate()
    const params = useParams()

    const currentProject = projects.find(({_id})=> _id === params.id)

   
    
    async function addStage (values) {

        await api.post(`/projects/${params.id}/stages`, values, { withCredentials: true })
            .then ((res) => {
                console.log(res.data) 

                dispatch({
                    type: "addStage",
                    data: res.data
                })
                dispatch({ 
                    type: "setStageSuccessAlert",
                    data: "Your stage was successfully created "
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    // console.log(currentProject)
    console.log(currentProject)
    console.log(projects)
    console.log(stages)

        //formik states, validation and submit
        const formik = useFormik({
            initialValues: {
                name: '',
            },
            validate,
            onSubmit: (values, {resetForm} ) => {
            //   alert(JSON.stringify(values, null, 2))
                addStage(values)
                console.log(values)
                // dispatch({
                //     type: "setSuccessAlert",
                //     data: "Stage Successfully Created "
                // })
                resetForm()
                navigate(`/projects/${params.id}`)
                
            },
        })   
        console.log(currentProject.stages)
        console.log(stages)

    return (
        <>
        <form onSubmit={formik.handleSubmit}>  
        
            <Center>
                <Text mb='1rem' fontSize='4xl' color='teal' as='b'> Create new Stage  </Text>
            </Center>
            <FormControl isInvalid={formik.errors.name}>
                <Center>
                    <FormLabel htmlFor='name'>Stage Name</FormLabel>
                </Center>
                <Center>
                    <Input w="25rem" id='name' type='text' onChange={formik.handleChange} value={formik.values.name} />
                </Center>
                <Center>
                    {formik.errors.name ? <FormErrorMessage>{formik.errors.name}</FormErrorMessage> : null}
                </Center>
            </FormControl>
           <Center>
             <Button mt='2rem' w='20rem'colorScheme='teal' type='submit' >Submit</Button>
            </Center>
          

        </form>
        </>
    )
}

export default NewStage