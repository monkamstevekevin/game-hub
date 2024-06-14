import React from 'react'
import {Badge} from "@chakra-ui/react";
 interface props{
    score: number
 }

const CriticScore = ({score}: props) => {
    return (
       <Badge  borderRadius={4} fontSize="14px" paddingX={2} colorScheme={score > 95 ? "green" : score > 90 ? "yellow" : "red"}>{score}</Badge>
    )
}
export default CriticScore
