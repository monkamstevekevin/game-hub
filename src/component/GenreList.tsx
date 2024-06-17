import React from 'react'
import useGenres, {Genre} from "../hooks/useGenres";
import {HStack, Image, List, ListItem, Spinner, Button, Heading} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
interface props{
    onSelectGenre: (genre:Genre) => void;
    selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre,selectedGenre}:props) => {
    const  {data, isLoading,error} =  useGenres();
    if(isLoading) return  <Spinner></Spinner>
    if(error) return null;
    return (
        <>
            <Heading  fontSize='2xl' marginBottom={3}> Genres</Heading>
            <List>
                {data.map(genre =>
                    <ListItem paddingY='5px' key={genre.id}>
                        <HStack>
                            <Image  boxSize="32px" borderRadius={8} objectFit="cover" src={getCroppedImageUrl(genre.image_background)}></Image>
                            <Button  whiteSpace={'normal'}  textAlign={"left"} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                        </HStack></ListItem>)}
            </List>
        </>

    )
}
export default GenreList
