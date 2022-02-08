import React from "react";
import { Input, InputLeftAddon, InputGroup, Center, Button, Text, Icon, Checkbox, Stack } from '@chakra-ui/react'
import { AiOutlinePlusCircle, AiFillExclamationCircle } from 'react-icons/ai'
import { BsTrash, BsPlusCircle } from 'react-icons/bs'
import{ Link } from 'react-router-dom'
import { useEffect, useState } from "react";

const tradeList = [{carpenter: ["Jim’s carpentry", "JVK & Sons Construction", "Josh Cassidy Carpenter"]}, {plumber: ["Jim’s plumbing", "Paul Fitzpatrick Plumbing", "Damien's Plumbing Services"]}, {electrical: ["Jim’s electrical", "On Electrical Contractors Pty Ltd", "NNC ELECTRICAL"]}]



const TradeProdvider = () => {

    return(
        <div>
            <Center>
                <Icon m="1rem" as={BsPlusCircle} />
                <Link to="/">  Add trade provider </Link>
            </Center>
        </div>
    )
} 

export default TradeProdvider