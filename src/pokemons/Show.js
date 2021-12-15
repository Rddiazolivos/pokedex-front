import * as React from 'react';
import { useQuery } from 'react-query'
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import getPokemon from '../api/getPokemon'



export default function Show() {
  let params = useParams();
  const { isLoading, isError, data, error } = useQuery(`${params.id}`, () => getPokemon(params.id))
   if (isLoading) {
    return <span>Loading...</span>
    }

    if (isError) {
      return <span>Error: {error.message}</span>
   }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data.data.name[0].toUpperCase()}
          </Avatar>
        }
        title={data.data.name}
      />
      <CardMedia
        component="img"
        height="auto"
        image={data.data.photo}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          Abilities
        </Typography>
        {
          data.data.abilities.map(
            ({ability}) => 
            <Typography variant="body2" color="text.secondary">
              {ability.name}
            </Typography>
          )
        }
      </CardContent>
    </Card>
  );
}
