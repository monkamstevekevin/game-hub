import React from 'react'
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
 interface GameCardProps {
    game: Game,
 }

const GameCard = ({game}: GameCardProps) => {
    return (

         <Card >
             <Image src={getCroppedImageUrl(game.background_image)}></Image>
             <CardBody>


                 <HStack justifyContent="space-between" marginY={1} marginBottom={3}>
                     <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
                     <CriticScore score={game.metacritic}></CriticScore>
                 </HStack>
                 <Heading fontSize="2xl">{game.name}</Heading>
             </CardBody>
         </Card>

    )
}
export default GameCard
