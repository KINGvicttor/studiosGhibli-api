import { createContext, ReactNode, useContext } from "react";

type DataContextType = {

}

type Props = {
    children: ReactNode;
}

export const MovieContext = createContext<DataContextType | null>(null);
export const MovieContextProvider = ({children}:Props) => {
    return(
        <MovieContext.Provider value={''}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = useContext(MovieContext)