import { movieApi } from "@/core/api/movie-api";
import { MoviedbCreditsResponseTs } from "@/infractructure/interfaces/moviedb-credits-response";
import { MovieMapper } from "@/infractructure/mappers/movie.mapper";

export const getCastByAction = async(movieId: number) => {
    try {
        const { data } = await movieApi.get<MoviedbCreditsResponseTs>(`/${movieId}/credits`);
        return data.cast.map(MovieMapper.fromMovieDBCastToEntity)
    } catch (error) {
        console.log(error);
        throw 'No se pudo obtneer la informacion de el cast'
    }
}