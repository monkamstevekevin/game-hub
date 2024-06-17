import React, {useState} from 'react';

import './App.css';
import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import {Platform} from "./hooks/useGames";
import SortSelector from "./component/SortSelector";

 export interface  GameQuery{
     genre: Genre | null
     platform: Platform | null
     sortOrder : string
     searchText: string
 }
function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
   <>
       <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"`}} templateColumns={{
           base: '1fr',
           lg: '200px 1fr'
       }} >
           <GridItem pl='2'  area={'nav'}>
             <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
           </GridItem>
         <Show above='lg'>
             <GridItem pl='2'  area={'aside'} paddingY={5}> <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/> </GridItem>

         </Show>
           <GridItem pl='2'  area={'main'}>
              <HStack spacing={5} paddingLeft={2} marginBottom={5}>
                  <PlatformSelector selectedPlatform={gameQuery.platform} onselectPlatform={(platform)=>setGameQuery({...gameQuery, platform})} />
                  <SortSelector sortOrder = {gameQuery.sortOrder} onselectSortOrder={(sortOrder)=>setGameQuery({...gameQuery, sortOrder})}></SortSelector>
              </HStack>
                <GameGrid gameQuery={gameQuery}/>
           </GridItem>
       </Grid>

   </>
  );
}

export default App;
