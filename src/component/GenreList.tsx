import React from 'react'
import useGenres, {Genre} from "../hooks/useGenres";
import {HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";


const GenreList = () => {
    const  {data, isLoading,error} =  useGenres();
    if(isLoading) return  <Spinner></Spinner>
    if(error) return null;
    return (
      <List>
          {data.map(genre =>
              <ListItem paddingY='5px' key={genre.id}><HStack>
              <Image boxSize="32px" borderRadius={8} objectFit="cover" src={getCroppedImageUrl(genre.image_background)}></Image>
              <Text fontSize='lg'>{genre.name}</Text>
          </HStack></ListItem>)}
      </List>
    )
}
export default GenreList
