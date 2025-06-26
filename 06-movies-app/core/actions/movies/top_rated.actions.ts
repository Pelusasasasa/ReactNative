import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infractructure/interfaces/moviedb-responses";
import { MovieMapper } from "@/infractructure/mappers/movie.mapper";

interface Options {
    page?: number,
    limint?: number
}

export const topRatedMoviesAction = async({page = 1, limint = 10}: Options) => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>(`/top_rated`, {
            params: {
                page,
                limint
            }
        });

        const movies = data.results.map( MovieMapper.fromTheMovieDbToMovie)
        return movies
    } catch (error) {
        console.log(error);
        throw 'No se pudgo cargar las peliculas'
    }
}