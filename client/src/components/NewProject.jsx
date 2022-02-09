import { Button, Center, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea } from "@chakra-ui/react"
import { Form, useFormik } from "formik"
import React, { useContext } from "react"
import api from "../services/api"
import validate from "../validation/newProjectValidation"
import appContext from "../context/appContext"


const NewProject = () => {
    const {state: {projects}, dispatch} = useContext(appContext)
    
async function addProject (values) {

    await api.post('/projects', values, { withCredentials: true })
        .then ((res) => {
            console.log(res.data) 
            dispatch({
                type: "addProjects",
                data: res.data
            })
            console.log(projects) 
        })
        .catch((error)=>{
            console.log(error)
        })
}

    //formik states, validation and submit
    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            completionDate: '',
            comments: ''
        },
        validate,
        onSubmit: (values, {resetForm} ) => {
        //   alert(JSON.stringify(values, null, 2))
            console.log(values)
            // addProject(values)
            dispatch({
                type: "addProjects",
                data: values
            })
           
            // resetForm()
            
        },
    })   
console.log(projects)


    return (
        <>
        <form onSubmit={formik.handleSubmit}>  
            <Center>
                <Text mb='1rem' fontSize='5xl' color='teal' as='b'> Create new Project </Text>
            </Center>
            <FormControl isInvalid={formik.errors.name}>
                <Center>
                    <FormLabel htmlFor='name'>Project Name</FormLabel>
                </Center>
                <Center>
                    <Input w="25rem" id='name' type='text' onChange={formik.handleChange} value={formik.values.name} />
                </Center>
                <Center>
                    {formik.errors.name ? <FormErrorMessage>{formik.errors.name}</FormErrorMessage> : null}
                </Center>
            </FormControl>

            <FormControl isInvalid={formik.errors.address}>
                <Center>
                    <FormLabel mt="1rem" htmlFor='address'>Project Address</FormLabel>
                </Center>
                <Center>
                    <Input w="25rem" id='address' type='text' onChange={formik.handleChange} value={formik.values.address}/>
                </Center>
                <Center>
                    {formik.errors.address ? <FormErrorMessage>{formik.errors.address}</FormErrorMessage> : null}
                </Center>
            </FormControl>

            <FormControl isInvalid={formik.errors.completionDate}>
                <Center>
                    <FormLabel mt="1rem" htmlFor='completionDate'>Est. Completion date</FormLabel>
                </Center>
                <Center>
                    <Input w="25rem" id='completionDate' type='date' onChange={formik.handleChange} value={formik.values.completionDate}/>
                </Center>
                <Center>
                    {formik.errors.completionDate ? <FormErrorMessage>{formik.errors.completionDate}</FormErrorMessage> : null}
                </Center>
            </FormControl>
            <Center>
                <FormLabel mt="1rem" htmlFor='comments'>Comments</FormLabel>
            </Center>
            <Center>
                <Textarea w="25rem" id='comments' type='textArea' />
            </Center>
            <Center>
            <Button mt='2rem' w='20rem'colorScheme='teal' type='submit' >Submit</Button>
            </Center>
        </form>
        </>
    )

}

export default NewProject