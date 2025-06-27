import { getMovieByIdAction } from "@/core/actions/movie/get_movie_by_id.actions"
import { useQuery } from "@tanstack/react-query"

export const useMovie = (id: number) => {

    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24,
    })

    return {
        movieQuery
    }
}