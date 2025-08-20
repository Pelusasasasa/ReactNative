import { traerPokemones } from "@/core/pokemon/actions/traer-pokemons-action";
import { useInfiniteQuery } from "@tanstack/react-query";


export const usePokemons = () => {

    const pokemonsQuery = useInfiniteQuery({
        queryKey: ['pokemons', 'inifinite'],
        queryFn: ({ pageParam = 1}) => traerPokemones(20, pageParam * 20),
        staleTime: 1000 * 60 * 5,
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => allPages.length,
    });


    return {
        pokemonsQuery,
    
        //Metodos
        loadNextPage: pokemonsQuery.fetchNextPage,
    }
}