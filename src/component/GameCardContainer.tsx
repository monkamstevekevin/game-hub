import React from 'react'
import {Box} from "@chakra-ui/react";
 interface props{
    children: React.ReactNode
 }
const GameCardContainer = ({children}: props) => {
    return (
       <Box width= '300px' borderRadius="10px" overflow="hidden">
           {children}
       </Box>
    )
}
export default GameCardContainer
