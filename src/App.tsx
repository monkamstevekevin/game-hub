import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./component/NavBar";


function App() {
  return (
   <>
       <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"`}} >
           <GridItem pl='2'  area={'nav'}>
             <NavBar />
           </GridItem>
         <Show above='lg'>
             <GridItem pl='2' bg='pink.300' area={'aside'}> Aside </GridItem>
         </Show>
           <GridItem pl='2' bg='blue.300' area={'main'}> Main </GridItem>
       </Grid>

   </>
  );
}

export default App;
