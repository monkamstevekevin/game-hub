

import {SimpleGrid, Text} from "@chakra-ui/react";
import UseGames, {Platform} from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {Genre} from "../hooks/useGenres";
import {GameQuery} from "../App";
 interface props {
     gameQuery:GameQuery,

 }
const GameGrid = ({gameQuery}: props ) => {
 const {data, error,isLoading} = UseGames(gameQuery);
 const skeletons = [1,2,3,4,5,6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{base: 1, md: 2, lg: 3, xl: 4}} padding="10px" spacing={3}>
                {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton /></GameCardContainer>) }
                {data.map(game => <GameCardContainer  key={game.id}><GameCard game={game}></GameCard></GameCardContainer>)}
            </SimpleGrid>
        </>
    )
}
export default GameGrid
