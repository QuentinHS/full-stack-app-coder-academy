import { SearchIcon } from "@chakra-ui/icons";
import { Center, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

const SearchBar = ({input: query, onChange: setQuery}) => {


    return(
        <>
            <Center>
                <InputGroup>
                        <InputLeftElement m='1rem' pointerEvents='none' children={<SearchIcon color='gray.300'/>}/>
                        <Input m='1rem' w={[300, 200, 200]} placeholder='Search projects' size='md' value={query} onChange={e => setQuery(e.target.value)} />
                </InputGroup>
            </Center>
            
        </>
    )
}

export default SearchBar