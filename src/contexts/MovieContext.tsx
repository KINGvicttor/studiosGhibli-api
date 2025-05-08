import { movieActionList, WatchedReducer } from "@/reducers/WatchedReducer";
import { Movie } from "@/types/Movie";
import { MovieWatched } from "@/types/MovieWatched";
import { getFullMovieList } from "@/utils/api";
import { createContext, Dispatch, ReactNode, useEffect, useReducer, useState } from "react";

type MovieContextType = {
    moviesData: Movie[];
    watchedMovieList: MovieWatched[]
    addWatchedMovie: (i: number, m: any) => void;
    showWatched: boolean;
    setShowWatched: (s: boolean) => void;
    showMovies: boolean;
    setShowMovies: (s: boolean) => void;

}

type Props = {
    children: ReactNode
}

export const MovieContext = createContext<MovieContextType | null>(null);
export const MovieContextProvider = ({ children }: Props) => {

    const [moviesData, setMoviesData] = useState<Movie[]>([]);
    const [watchedMovieList, dispatch] = useReducer(WatchedReducer, [])
    const [showMovies, setShowMovies] = useState<boolean>(true);
    const [showWatched, setShowWatched] = useState<boolean>(false);

{/* Função que adiciona filmes marcador como visto no array de filmes vistos */}
    const addWatchedMovie = (id: number, movie: any) => {
        dispatch({
            type: 'add',
            payload: {
                id: id,
                image: movie.image,
                title: movie.title,
                original_title_romanised: movie.original_title_romanised,
                director: movie.director,
                producer: movie.producer,
                release_date: movie.release_date,
                running_time: movie.running_time,
                description: movie.description,
                rt_score: movie.rt_score,
            }
        })
    }

    useEffect(() => {
        const getMoviesList = getFullMovieList();
        getMoviesList.then((response) => setMoviesData(response))
    }, [])

    return (
        <MovieContext.Provider value={{ moviesData, watchedMovieList,  showMovies, setShowMovies, showWatched, setShowWatched, addWatchedMovie}}>
            {children}
        </MovieContext.Provider>
    )
}