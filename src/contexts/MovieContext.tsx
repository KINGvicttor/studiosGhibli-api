import { Movie } from "@/types/Movie";
import { getFullMovieList } from "@/utils/api";
import { createContext, ReactNode, useEffect, useState } from "react";

type MovieContextType = {
    moviesData: Movie[];
}

type Props = {
    children: ReactNode
}

export const MovieContext = createContext<MovieContextType | null>(null);
export const MovieContextProvider = ({ children }: Props) => {

    const [moviesData, setMoviesData] = useState<Movie[]>([]);

    useEffect(() => {
        const getMoviesList = getFullMovieList();
        getMoviesList.then((response) => setMoviesData(response))
    }, [])

    return (
        <MovieContext.Provider value={{ moviesData }}>
            {children}
        </MovieContext.Provider>
    )
}