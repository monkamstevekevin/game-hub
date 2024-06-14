import React from 'react'
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
 interface GameCardProps {
    game: Game,
 }

const GameCard = ({game}: GameCardProps) => {
    return (
        <Card borderRadius="10px" overflow="hidden">
           <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>

               <HStack justifyContent="space-between" marginY={1}>
                   <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
                   <CriticScore score={game.metacritic}></CriticScore>
               </HStack>

            </CardBody>
        </Card>
    )
}
export default GameCard
