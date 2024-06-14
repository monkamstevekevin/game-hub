import React from 'react';

import './App.css';
import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";


function App() {
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
             <GridItem pl='2'  area={'aside'} paddingY={5}> <GenreList/> </GridItem>
         </Show>
           <GridItem pl='2'  area={'main'}>
               <GameGrid/>
           </GridItem>
       </Grid>

   </>
  );
}

export default App;
