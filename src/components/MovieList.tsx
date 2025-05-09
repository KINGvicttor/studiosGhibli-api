import { MovieContext } from "@/contexts/MovieContext"
import { useContext } from "react"
import { MovieCard } from "./MovieCard"


export const MovieList = () => {

    const movieCtx = useContext(MovieContext)

    return (
        <section className="mt-10">
            <div className="container mx-auto h-auto pb-10 px-25 flex justify-start items-center flex-wrap gap-x-10 gap-y-10">

                {/* Lista com todos os filmes sem filtro */}
                {movieCtx?.removeFilters &&
                    movieCtx?.moviesData.slice(0, 8).map((movie, index) => (
                        <MovieCard key={index} id={index} movie={movie} watched={false} favorite={false}/>
                    ))
                }

                {/* Lista de filmes marcados como assistido */}
                {movieCtx?.showWatched && movieCtx?.watchedMovieList.length > 0 &&
                    movieCtx?.watchedMovieList.slice(0, 8).map((movie, index) => (
                        <MovieCard key={index} id={index} movie={movie} watched={true} favorite={false}/>
                    ))
                }
                {movieCtx?.showWatched && movieCtx?.watchedMovieList.length === 0 &&
                    <div className="container mx-auto flex flex-col items-center h-[calc(100vh-375px)] py-10">
                        <p className="text-lg text-gray-500">No movies match the selected filters</p>
                        <button onClick={() => movieCtx?.removeFiltersBtn()} className="bg-white border border-gray-500 px-3 py-2 rounded-lg mt-4 cursor-pointer hover:bg-gray-200">Clear All Filters</button>
                    </div>
                }
            </div>
        </section >
    )
}