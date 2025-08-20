import { pokedexApi } from "../../api/pokedexApi";
import { PokemonsAPIResponses } from "../interface/PokemonsResponse";

export const traerPokemones = async(limit = 20, offset = 0) => {

    try {
        const { data } = await pokedexApi.get<PokemonsAPIResponses>(`/`, {
            params: {
                limit,
                offset
            }
        });

        console.log(data.results);
        return data.results;
    } catch (error) {
        console.log(error);
        throw new Error('Unabled to load pokemons')
    }

};