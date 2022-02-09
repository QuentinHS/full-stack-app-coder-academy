import React from "react";
import { Center, Icon, Text, Input,  Heading, IconButton, Alert, AlertDescription, AlertIcon, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import { useFormik } from "formik"
import { ChevronDownIcon } from "@chakra-ui/icons";


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
                <FormControl isInvalid={formik.errors.trade}>
                    <FormLabel mt='2rem' htmlFor='businessName'>Task Name </FormLabel>
                    <Input id='businessName' name='businessName' placeholder='Enter a task Name' onChange={formik.handleChange} value={formik.values.businessName}/>
                    {formik.errors.businessName ? <FormErrorMessage>{formik.errors.businessName}</FormErrorMessage> : null}
                </FormControl>
            </Center>
            <Center m="1rem">
                <Text>Select a Trade</Text>
                <IconButton size='sm'  mr="2rem" ml='12px' aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
            </Center>
            <Center m="1rem">
                <Text>Task Assignee</Text>
                <IconButton size='sm'  mr="2rem" ml='12px' aria-label='Show/hide component' icon={<ChevronDownIcon/>} onClick={handleClickShow}/>
            </Center>
        </div>
    )
   




    // return(
    //     

    //     
    //         <form onSubmit={formik.handleSubmit}></form>
    //     </div>
    // )
}

export default NewTask

//     <Center mb="2rem">
//     <Heading fontSize='5xl' color='teal' as='b' >Create New Task</Heading>
// </Center>