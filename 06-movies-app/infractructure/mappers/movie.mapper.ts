import { Cast, CompleteMovie, Movie } from "../interfaces/movie.interfaces";
import { MovieDBCast } from "../interfaces/moviedb-credits-response";
import { MovieDBmovieResponse } from "../interfaces/moviedb-movie-response";
import { Result } from "../interfaces/moviedb-responses";

export class MovieMapper {
    static fromTheMovieDbToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average
        }
    };

    static fromTheMovieDBToCompleteMovie = (movie: MovieDBmovieResponse ): CompleteMovie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
            budget: movie.budget,
            duration: movie.runtime,
            genres: movie.genres.map(g => g.name),
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(c => c.name)

        }
    }

    static fromMovieDBCastToEntity = (actor: MovieDBCast): Cast => {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No Caracter',
            avatar: actor.profile_path 
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : 'https://i.stack.imgur.com/l60Hf.png'
        }
    }
}