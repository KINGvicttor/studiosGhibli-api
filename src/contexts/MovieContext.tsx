import { MovieReducer } from "@/reducers/MovieReducer";
import { Movie } from "@/types/Movie";
import { getFullMovieList } from "@/utils/api";
import { createContext, ReactNode, useEffect, useReducer, useState } from "react";

type MovieContextType = {
    movieList: Movie[];

    toggleWatched: (id: number, watched: boolean) => void;
    toggleFavorite: (id: number, favorited: boolean) => void;

    watchedLabel: string;
    setWatchedLabel: (watched: string) => void;

    removeFiltersBtn: () => void;
    removeFilters: boolean;

    showWatchedBtn: () => void;
    showWatched: boolean;

    showFavoriteBtn: () => void;
    showFavorite: boolean;

}

type Props = {
    children: ReactNode
}

export const MovieContext = createContext<MovieContextType | null>(null);
export const MovieContextProvider = ({ children }: Props) => {

    {/* Reducers */ }
    const [movieList, dispatch] = useReducer(MovieReducer, [])

    {/* Filtros */ }
    const [removeFilters, setRemoveFilters] = useState<boolean>(true);
    const [showWatched, setShowWatched] = useState<boolean>(false);
    const [showFavorite, setShowFavorite] = useState<boolean>(false);

    {/* States para alterar front dos botões */ }
    const [watchedLabel, setWatchedLabel] = useState<string>('Mark Watched')


    {/* Remover filtros */ }
    const removeFiltersBtn = () => {
        setRemoveFilters(true)
        setShowWatched(false)
    }

    {/* Mostrar lista de filmes marcados como assistidos */ }
    const showWatchedBtn = () => {
        setShowWatched(true)
        setRemoveFilters(false)
    }

    const showFavoriteBtn = () => {
        setShowFavorite(true)
        setShowWatched(false)
        setRemoveFilters(false)
    }


    {/* Marcar / desmarcar filme como visto */}
    const toggleWatched = (id: number, watched: boolean) => {
        dispatch({
            type: 'toggleWatched',
            payload: {
                id: id,
                watched: watched
            }
        })
    }

    {/* Marcar / desmarcar filme como visto */}
    const toggleFavorite = (id: number, favorite: boolean) => {
        dispatch({
            type: 'toggleFavorite',
            payload: {
                id: id,
                favorite: favorite
            }
        })
    }

    {/* Solicitando dados da api */ }
    useEffect(() => {
        const getMoviesList = getFullMovieList();
        getMoviesList.then((response) => response.map((item: Movie) => {
            dispatch({
                type:'addMovieData',
                payload: {
                    description: item.description,
                    director: item.director,
                    favorite: false,
                    image: item.image,
                    note: 'empty',
                    original_title_romanised: item.original_title_romanised,
                    producer: item.producer,
                    release_date: item.release_date,
                    rt_score: item.rt_score,
                    running_time: item.running_time,
                    title: item.title,
                    watched: false
                }
            })
        }))
    }, [])
    return (
        <MovieContext.Provider value={{movieList, removeFilters, showWatched, showFavorite, watchedLabel, toggleWatched, toggleFavorite, removeFiltersBtn, showWatchedBtn, showFavoriteBtn, setWatchedLabel }}>
            {children}
        </MovieContext.Provider>
    )
}