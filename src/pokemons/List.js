import React from 'react'
import { useQuery } from 'react-query'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import getPokemons from '../api/getPokemons'
const List = () => {
   // Queries
   const { isLoading, isError, data, error } = useQuery('todos', getPokemons)
   if (isLoading) {
    return <span>Loading...</span>
    }

    if (isError) {
      return <span>Error: {error.message}</span>
   }
   return (

    <ImageList sx={{ m: 10 }} >
      <ImageListItem key="Subheader" cols={2} >
        <ListSubheader component="div">Pokemons</ListSubheader>
      </ImageListItem>
      {data.data.pokemons.map((item) => (
        <ImageListItem key={item.photo}>
          <img
            src={`${item.photo}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.weight}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.name}`}
                href={`${item.id}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
   )
}

export default List
