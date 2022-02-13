import React from "react";
import { Center, Icon,  Heading, IconButton } from '@chakra-ui/react'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'

// inteded as a means to display a list of trade providers
const TradeProdviders = () => {

    return(
        <div>
            <Center>
                <Heading fontSize='5xl' color='teal' as='b'>Trade Providers</Heading>
            </Center>
            <Center mt="2rem">
                {/* Pm can add another trade provider */}
                <Icon boxSize={6} m="1rem" as={BsPlusCircle} />
                <Link to="/">  Add trade provider </Link>
            </Center>
            {/* Lists displays list of trade providers */}
            <Center mt="1rem">
                <ul >
                    {tradeList[0].carpenter.map((trade, index) => 
                        <Center key={index} m="1rem" >
                            <IconButton aria-label='Search database' icon={<BsTrash />} />
                            <Link to="/">  {trade} </Link>
                        </Center>
                    )}
                </ul>
            </Center>
        </div>
    )
} 

export default TradeProdviders