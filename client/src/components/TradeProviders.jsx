import React from "react";
import { Center, Icon,  Heading, IconButton } from '@chakra-ui/react'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'

const tradeList = [{carpenter: ["Jim’s carpentry", "JVK & Sons Construction", "Josh Cassidy Carpenter"]}, {plumber: ["Jim’s plumbing", "Paul Fitzpatrick Plumbing", "Damien's Plumbing Services"]}, {electrical: ["Jim’s electrical", "On Electrical Contractors Pty Ltd", "NNC ELECTRICAL"]}]



const TradeProdviders = () => {

    return(
        <div>
            <Center>
                <Heading>Trade Providers</Heading>
            </Center>
            <Center mt="2rem">
                <Icon boxSize={6} m="1rem" as={BsPlusCircle} />
                <Link to="/">  Add trade provider </Link>
            </Center>
            <Center mt="1rem">
                <ul >
                    {tradeList[0].carpenter.map((trade, index) => 
                        <Center key={index}  >
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