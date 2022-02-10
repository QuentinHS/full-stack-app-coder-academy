import { Button, Center, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea } from "@chakra-ui/react"
import react from 'react'
import {useContext} from 'react '
import appContext from '../context/appContext'
import { useNavigate } from "react-router"
import { Form, useFormik } from "formik"
import validate from "../validation/newStageValidation"
import NewTask from "./NewTask"

const NewStage = () =>{



    const {state: {projects}, dispatch} = useContext(appContext)
    const navigate = useNavigate()
    
    async function addProject (values) {

        await api.post('/stages', values, { withCredentials: true })
            .then ((res) => {
                console.log(res.data) 
                
            })
            .catch((error)=>{
                console.log(error)
            })
    }

        //formik states, validation and submit
        const formik = useFormik({
            initialValues: {
                name: '',
                tasks: [],
            },
            validate,
            onSubmit: (values, {resetForm} ) => {
            //   alert(JSON.stringify(values, null, 2))
                console.log(values)
                addProject(values)
                resetForm()
                // navigate("/projects")
                
            },
        })   
    console.log(projects)


    return (
        <>
        <form onSubmit={formik.handleSubmit}>  
            <Center>
                <Text mb='1rem' fontSize='5xl' color='teal' as='b'> Create new Stage  </Text>
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
            < NewTask />

           <Center>
             <Button mt='2rem' w='20rem'colorScheme='teal' type='submit' >Submit</Button>
            </Center>
        </form>
        </>
    )
}

export default NewStage