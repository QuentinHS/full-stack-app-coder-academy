import React from "react";
import { Button, Image, Center, Text } from '@chakra-ui/react'
import logo from '../shared/code-solutions-logo.png'
import mainImage from '../shared/construction.jpg'

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
                    />
            </Center>
            <Center>
                <Button isloading mt="1em" width="15em" colorScheme="teal" variant="solid">Login</Button>
            </Center>
            <Center>
                <Button isloading width="15em" colorScheme="teal" variant="outline">Sign Up</Button>
            </Center>
        </>
        
    )
}

export default Home