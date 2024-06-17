import React from 'react'
import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";
interface props{
gamequery:GameQuery
}
const GameHeading = ({gamequery}:props) => {
    const heading = `${gamequery.platform?.name || ''} ${gamequery.genre?.name || ''} Games`;
    return (
       <Heading  marginY={5} as='h1'>{heading}</Heading>
    )
}
export default GameHeading
