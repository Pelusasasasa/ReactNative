import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infractructure/interfaces/moviedb-responses";
import { MovieMapper } from "@/infractructure/mappers/movie.mapper";

export const popularMoviesAction = async() => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular');

        const movies = data.results.map( MovieMapper.fromTheMovieDbToMovie)
        return movies
    } catch (error) {
        console.log(error);
        throw 'No se pudgo cargar las peliculas'
    }
}