
import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesAction } from "@/core/actions/movies/popular.actions";
import { topRatedMoviesAction } from "@/core/actions/movies/top_rated.actions";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.actions";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
      // Queries
const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 Horas
    });

const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, //24 Horas
});

const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, //24 Horas
});

const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'top_rated'],
    queryFn: ({ pageParam }) => {
        return topRatedMoviesAction({page: pageParam})
    },
    staleTime: 1000 * 60 * 60 * 24, //24 Horas
    getNextPageParam: (lastPage, pages) => pages.length + 1
});


    return {
        nowPlayingQuery,
        popularQuery,
        upcomingQuery,
        topRatedQuery
    }

}