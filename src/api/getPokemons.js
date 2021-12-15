import axios from "axios"
export default function getPokemons() {
  return axios.get(`${process.env.REACT_APP_HOST}/pokemons`)
};