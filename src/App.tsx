import React, {useState} from 'react';

import './App.css';
import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import {Platform} from "./hooks/useGames";


function App() {
     const [selectedGenre , setSelectedGenre] = useState<Genre | null
     >(null)
    const [selectedPlatform, setSelectedPlatform] = useState<Platform|null>(null)
  return (
   <>
       <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"`}} templateColumns={{
           base: '1fr',
           lg: '200px 1fr'
       }} >
           <GridItem pl='2'  area={'nav'}>
             <NavBar />
           </GridItem>
         <Show above='lg'>
             <GridItem pl='2'  area={'aside'} paddingY={5}> <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/> </GridItem>

         </Show>
           <GridItem pl='2'  area={'main'}>
               <PlatformSelector selectedPlatform={selectedPlatform} onselectPlatform={(platform:Platform)=>setSelectedPlatform(platform)} />
               <GameGrid selectedPlatform={selectedPlatform}  selectedGenre={selectedGenre}/>
           </GridItem>
       </Grid>

   </>
  );
}

export default App;
