import React from "react";
import { Button, Image, Center, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../public/code-solutions-logo.png'
import mainImage from '../public/construction.jpg'

const Home = () => {
    return(
        <>
        <Center>
                <Image 
                    rounded="0.5rem"
                    src={logo}
                    alt="code solutions logo"
                    height="10rem"
                    />
            </Center>
            <Center>
                <Text fontSize="5xl" color="teal" as="b">Welcome </Text>
            </Center>
            <Center>
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
                <Link to="/">
                    <Button mt="1em" width="15em" colorScheme="teal" variant="solid">Login</Button>
                </Link>
            </Center>
            <Center>
                <Link to="/signup"> 
                    <Button width="15em" colorScheme="teal" variant="outline">Sign Up</Button>
                </Link>
            </Center>
        </>
        
    )
}

export default Home