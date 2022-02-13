import React from "react";
import { Button, Image, Center, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../public/code-solutions-logo.png'
import mainImage from '../public/construction.jpg'

// landing page
const Home = () => {
    return(
        <>
        <Center>
                {/* Displays the Three cirlce logo */}
                <Image 
                    rounded="0.5rem"
                    src={logo}
                    alt="code solutions logo"
                    height="10rem"
                    />
            </Center>
            <Center>
                <Text fontSize="5xl" color="teal" as="b">Welcome  </Text>
            </Center>
            <Center>
                {/* Displays the landing page image */}
                <Image 
                    rounded="0.5rem"
                    src={mainImage}
                    alt="placeholder image"
                    mt="1em"
                    mb="1em"
                    width="40em"
                    />
            </Center>
            <Center>
                {/* login button */}
                <Link to="/login">
                    <Button mt="1em" width="15em" colorScheme="teal" variant="solid">Login</Button>
                </Link>
            </Center>
            <Center>
                {/* sign up button */}
                <Link to="/register"> 
                    <Button width="15em" colorScheme="teal" variant="outline">Sign Up</Button>
                </Link>
            </Center>
        </>
        
    )
}

export default Home