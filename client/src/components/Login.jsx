import { FormLabel, Input, Button, FormControl, FormErrorMessage, Center, Text } from "@chakra-ui/react"
import react from "react"
import { useFormik } from "formik"
import validate from "../validation/loginValidation"

const Login = () => {
  
  // Formik form validation states
  const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validate,
      onSubmit: (values, {resetForm} ) => {
      //   alert(JSON.stringify(values, null, 2))
        console.log(values)
        resetForm()
      },
  })
    return (
      <>
       <Center>
          <Text mb='1rem' fontSize='5xl' color='teal' as='b'>Login </Text>
        </Center>
        <Center>
          <form onSubmit={formik.handleSubmit}>
              <FormControl isInvalid={formik.errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <FormErrorMessage>{formik.errors.email}</FormErrorMessage> : null}
              </FormControl>
              <FormControl isInvalid={formik.errors.password}>

                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? <FormErrorMessage>{formik.errors.password}</FormErrorMessage> : null}
              </FormControl>

            <Button mt='2rem' w='20rem'colorScheme='teal' type='submit' >Submit</Button>
          </form>
        </Center>    
    
    </>
    );
}

export default Login