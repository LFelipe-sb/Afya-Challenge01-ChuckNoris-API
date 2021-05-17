import axios from 'axios';

export const chuckNorrisapi = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/'
});

export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});