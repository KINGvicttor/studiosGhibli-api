import { MovieReducer } from "@/reducers/MovieReducer";
import { Movie } from "@/types/Movie";
import { getFullMovieList } from "@/utils/api";
import { ToastContainer, toast } from "react-toastify";
import { createContext, ReactNode, useEffect, useReducer, useState } from "react";

type MovieContextType = {
    movieList: Movie[];

    searchInput: string;
    setSearchInput: (s: string) => void;
    toggleWatched: (id: number, watched: boolean) => void;
    toggleFavorite: (id: number, favorited: boolean) => void;
    editNote: (id: number, note: any) => void;

    removeFiltersBtn: () => void;
    removeFilters: boolean;

    showWatchedBtn: () => void;
    showWatched: boolean;
    showFavoriteBtn: () => void;
    showFavorite: boolean;
    showNotedBtn: () => void
    showNoted: boolean;

}

type Props = {
    children: ReactNode
}

export const MovieContext = createContext<MovieContextType | null>(null);
export const MovieContextProvider = ({ children }: Props) => {

    {/* Reducer */ }
    const [movieList, dispatch] = useReducer(MovieReducer, [])

    {/* Filtros */ }
    const [searchInput, setSearchInput] = useState<string>('')
    const [removeFilters, setRemoveFilters] = useState<boolean>(true);
    const [showWatched, setShowWatched] = useState<boolean>(false);
    const [showFavorite, setShowFavorite] = useState<boolean>(false);
    const [showNoted, setShowNoted] = useState<boolean>(false);


    {/* Remover filtros */ }
    const removeFiltersBtn = () => {
        setRemoveFilters(true)
        setShowWatched(false)
        setShowFavorite(false)
        setShowNoted(false)
    }

    {/* Mostrar lista de filmes marcados como assistidos */ }
    const showWatchedBtn = () => {
        setShowWatched(true)
        setShowFavorite(false)
        setShowNoted(false)
        setRemoveFilters(false)
    }

    {/* Mostrar lista de filmes marcados como favoritos */ }
    const showFavoriteBtn = () => {
        setShowFavorite(true)
        setShowWatched(false)
        setRemoveFilters(false)
        setShowNoted(false)
    }

    {/* Mostrar lista de filmes marcados como notas */ }
    const showNotedBtn = () => {
        setShowNoted(true)
        setShowFavorite(false)
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

    {/* Marcar / desmarcar filme como Favorito */}
    const toggleFavorite = (id: number, favorite: boolean) => {
        dispatch({
            type: 'toggleFavorite',
            payload: {
                id: id,
                favorite: favorite
            }
        })
    }

    {/* Editar notas */}
    const editNote = (id: number, note: any) => {
        dispatch({
            type: 'editNote',
            payload: {
                id: id,
                note: note
            }
        })
    }

    {/* Solicitando dados da api e inserindo no array do reducer*/ }
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
                    note: '',
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
        <MovieContext.Provider value={{movieList, searchInput, removeFilters, showWatched, showFavorite, showNoted, setSearchInput, toggleWatched, toggleFavorite, editNote, removeFiltersBtn, showWatchedBtn, showFavoriteBtn, showNotedBtn }}>
            {children}
        </MovieContext.Provider>
    )
}