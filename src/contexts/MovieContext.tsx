import { Movie } from "@/types/Movie";
import { MovieWatched } from "@/types/MovieWatched";
import { getFullMovieList } from "@/utils/api";
import { createContext, ReactNode, useEffect, useState } from "react";

type MovieContextType = {
    moviesData: Movie[];
    movieWatched: MovieWatched[];
    setMovieWatched: (m: MovieWatched[]) => void;
}

type Props = {
    children: ReactNode
}

export const MovieContext = createContext<MovieContextType | null>(null);
export const MovieContextProvider = ({ children }: Props) => {

    const [moviesData, setMoviesData] = useState<Movie[]>([]);
    const [movieWatched, setMovieWatched] = useState<MovieWatched[]>([]);

    useEffect(() => {
        const getMoviesList = getFullMovieList();
        getMoviesList.then((response) => setMoviesData(response))
    }, [])

    return (
        <MovieContext.Provider value={{ moviesData, movieWatched, setMovieWatched }}>
            {children}
        </MovieContext.Provider>
    )
}