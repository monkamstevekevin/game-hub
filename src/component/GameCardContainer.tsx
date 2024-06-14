import React from 'react'
import {Box} from "@chakra-ui/react";
 interface props{
    children: React.ReactNode
 }
const GameCardContainer = ({children}: props) => {
    return (
       <Box width= '100%' borderRadius="10px" overflow="hidden">
           {children}
       </Box>
    )
}
export default GameCardContainer
