

import {SimpleGrid, Text} from "@chakra-ui/react";
import UseGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
 const {games, error} = UseGames()
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{base: 1, md: 2, lg: 3, xl: 4}} padding="10px" spacing={10}>
                {games.map(game => <GameCard key={game.id} game={game}></GameCard>)}
            </SimpleGrid>
        </>
    )
}
export default GameGrid
