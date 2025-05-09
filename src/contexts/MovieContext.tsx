import { WatchedReducer } from "@/reducers/WatchedReducer";
import { Movie } from "@/types/Movie";
import { MovieWatched } from "@/types/MovieWatched";
import { getFullMovieList } from "@/utils/api";
import { createContext, ReactNode, useEffect, useReducer, useState } from "react";

type MovieContextType = {
    moviesData: Movie[];

    watchedMovieList: MovieWatched[]
    addWatchedMovie: (id: number, movie: any) => void;
    removeWatchedMovie: (id: number) => void;

    watchedLabel: string;
    setWatchedLabel: (watched: string) => void;

    removeFiltersBtn: () => void;
    removeFilters: boolean;

    showWatchedBtn: () => void;
    showWatched: boolean;

}

type Props = {
    children: ReactNode
}

export const MovieContext = createContext<MovieContextType | null>(null);
export const MovieContextProvider = ({ children }: Props) => {

    const [moviesData, setMoviesData] = useState<Movie[]>([]);

    {/* Reducers */}
    const [watchedMovieList, dispatch] = useReducer(WatchedReducer, [])
    
    {/* Filtros */}
    const [removeFilters, setRemoveFilters] = useState<boolean>(true);
    const [showWatched, setShowWatched] = useState<boolean>(false);

    {/* States para alterar front dos botões */}
    const [watchedLabel, setWatchedLabel] = useState<string>('Mark Watched')


    {/* Remover filtros */}
    const removeFiltersBtn = () => {
        setRemoveFilters(true)
        setShowWatched(false)
    }

    {/* Mostrar lista de filmes marcados como assistidos */}
    const showWatchedBtn = () => {
        setShowWatched(true)
        setRemoveFilters(false)
    }

    {/* Funções que adiciona e remove filmes marcador como visto no array de filmes vistos */ }
    const addWatchedMovie = (id: number, movie: any) => {
        dispatch({
            type: 'addWatched',
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
                rt_score: movie.rt_score
            }
        })
    }

    const removeWatchedMovie = (id: number) => {
        dispatch({
            type: 'removeWatched',
            payload: {
                id: id
            }
        })
    }

    useEffect(() => {
        const getMoviesList = getFullMovieList();
        getMoviesList.then((response) => setMoviesData(response))
    }, [])

    return (
        <MovieContext.Provider value={{ moviesData, watchedMovieList, removeFilters, showWatched, watchedLabel, removeFiltersBtn, showWatchedBtn, setWatchedLabel, addWatchedMovie, removeWatchedMovie }}>
            {children}
        </MovieContext.Provider>
    )
}