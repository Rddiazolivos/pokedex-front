import axios from "axios"
export default function getPokemons(id) {
  return axios(`${process.env.REACT_APP_HOST}/pokemons/${id}`)
};