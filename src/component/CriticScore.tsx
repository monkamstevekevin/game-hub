import React from 'react'
import {Badge} from "@chakra-ui/react";
 interface props{
    score: number
 }

const CriticScore = ({score}: props) => {
    return (
       <Badge  borderRadius={1} fontSize="14px" paddingX={2} colorScheme={score > 75 ? "green" : score > 60 ? "yellow" : "red"}>{score}</Badge>
    )
}
export default CriticScore
