import React from "react";
import { Button, Image, Center, Text } from '@chakra-ui/react'

const Home = () => {
    return(
        <>
            <Center>
                <Text fontSize="5xl" color="teal" as="b">Welcome </Text>
            </Center>
            <Center>
                <Image 
                    rounded="0.5rem"
                    src="https://picsum.photos/200/300"
                    alt="placeholder image"
                    />
            </Center>
            <Center>
                <Button isloading mt="1em" width="10em" colorScheme="teal" variant="solid">Login</Button>
            </Center>
            <Center>
                <Button isloading width="10em" colorScheme="teal" variant="outline">Sign Up</Button>
            </Center>
        </>
        
    )
}

export default Home