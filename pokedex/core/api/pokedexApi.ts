import axios from 'axios';

let API_URL = process.env.EXPO_PUBLIC_API_URL;

const pokedexApi = axios.create({
    baseURL: API_URL
});


export {
    pokedexApi
};

