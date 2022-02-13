import React from "react";
import { Center, Icon, Text, Textarea, Input,  Heading, IconButton, Alert, AlertDescription, AlertIcon, FormControl, FormLabel, FormErrorMessage, FormHelperText, Button } from '@chakra-ui/react'
import { useFormik } from "formik"
import { ChevronDownIcon } from "@chakra-ui/icons";
import{ Link } from 'react-router-dom'
import{ ImCalendar } from 'react-icons/im'

// This is where a new task is created
const NewTask = () => {
    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show)
    const formik = useFormik({
        initialValues: {
          trade: '',
          Task: ""
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return (
        <div>
            <Center mb="2rem">
                <Heading fontSize='5xl' color='teal' as='b' >Create New Task</Heading>
            </Center>
            <Center >
                <FormControl width='80%' isInvalid={formik.errors.trade}>
                    <FormLabel mt='2rem' htmlFor='businessName'>Task Name </FormLabel>
                    <Input id='businessName' name='businessName' placeholder='Enter a task Name Here' onChange={formik.handleChange} value={formik.values.businessName}/>
                    {formik.errors.businessName ? <FormErrorMessage>{formik.errors.businessName}</FormErrorMessage> : null}
                </FormControl>
            </Center>
            <Center m="1rem">
                <Text >Select a Trade</Text>
                <IconButton size='sm'  mr="2rem" ml='12px' aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
            </Center>
            <Center m="1rem">
                <Text>Task Assignee</Text>
                <IconButton size='sm'  mr="2rem" ml='12px' aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
            </Center>
            <Center>
                <Textarea width='80%'  placeholder='Comments' />
            </Center>
            <Center>
                <FormLabel mt="1rem" htmlFor='completionDate'>Task Due Date</FormLabel>
            </Center>
            <Center>
                <Input w="25rem" id='completionDate' type='date' onChange={formik.handleChange} value={formik.values.completionDate}/>
            </Center>
            <Center mt='2rem'>
                <Link to="/register">
                    <Button mt="1em" width="15rem" colorScheme="teal" variant="solid">Add Task</Button>
                </Link>
            </Center>
        </div>
    )
}

export default NewTask