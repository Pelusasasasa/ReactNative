import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infractructure/interfaces/movie.interfaces";
import { MovieDBmovieResponse } from "@/infractructure/interfaces/moviedb-movie-response";
import { MovieMapper } from "@/infractructure/mappers/movie.mapper";

export const getMovieByIdAction = async( id: number | string): Promise<CompleteMovie> => {
        try {
            const { data } = await movieApi.get<MovieDBmovieResponse>(`/${id}`);
            console.log('Pelicula HTTP Cargada');
            return MovieMapper.fromTheMovieDBToCompleteMovie(data);
        } catch (error) {
            console.log(error);
            throw 'No se pudgo cargar las peliculas'
        }
}