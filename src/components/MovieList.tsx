import { MovieContext } from "@/contexts/MovieContext"
import { useContext, useEffect } from "react"
import { MovieCard } from "./MovieCard"


export const MovieList = () => {

    const movieCtx = useContext(MovieContext)

    return (
        <section className="mt-10">
            <div className="container mx-auto h-auto pb-10 px-25 flex justify-start items-center flex-wrap gap-x-10 gap-y-10 md:gap-x-5 md:px-15 md:justify-center sm:px-2 sm:gap-x-5">

                {/* Lista com todos os filmes sem filtro */}
                {movieCtx?.removeFilters && movieCtx?.searchInput === '' &&
                    movieCtx?.movieList.slice(0, 8).map((movie, index) => (
                        <MovieCard key={index} index={index} movie={movie} />
                    ))
                }

                {movieCtx?.searchInput != '' &&
                    movieCtx?.movieList.filter((movie) => movie.title === movieCtx?.searchInput).map((movie, index) => (
                        <MovieCard key={index} index={index} movie={movie} />
                    ))
                }

                {/* Lista com filmes marcados como visto */}
                {movieCtx?.showWatched &&
                    movieCtx?.movieList.filter((movie) => movie.watched === true).slice(0, 8).map((movie, index) => (
                        <MovieCard key={index} index={index} movie={movie} />
                    ))
                }

                {/* Lista com filmes marcados como favoritos */}
                {movieCtx?.showFavorite &&
                    movieCtx?.movieList.filter((movie) => movie.favorite === true).slice(0, 8).map((movie, index) => (
                        <MovieCard key={index} index={index} movie={movie} />
                    ))
                }

                {/* Lista com filmes marcados como favoritos */}
                {movieCtx?.showNoted &&
                    movieCtx?.movieList.filter((movie) => movie.note != '').slice(0, 8).map((movie, index) => (
                        <MovieCard key={index} index={index} movie={movie} />
                    ))
                }

                {movieCtx?.showWatched && movieCtx.movieList.filter((movie) => movie.watched === true).length <= 0 &&
                    <div className="container mx-auto flex flex-col items-center py-20 h-[570px]">
                        <p className="text-lg text-gray-500">No movies match the selected filters</p>
                        <button onClick={() => movieCtx?.removeFiltersBtn()} className="mt-4 bg-white border border-gray-500 px-2 cursor-pointer rounded-lg hover:bg-gray-200">Clear all filters</button>
                    </div>
                }
                {movieCtx?.showFavorite && movieCtx.movieList.filter((movie) => movie.favorite === true).length <= 0 &&
                    <div className="container mx-auto flex flex-col items-center py-20 h-[570px]">
                        <p className="text-lg text-gray-500">No movies match the selected filters</p>
                        <button onClick={() => movieCtx?.removeFiltersBtn()} className="mt-4 bg-white border border-gray-500 px-2 cursor-pointer rounded-lg hover:bg-gray-200">Clear all filters</button>
                    </div>
                }
                {movieCtx?.showNoted && movieCtx.movieList.filter((movie) => movie.note != '').length <= 0 &&
                    <div className="container mx-auto flex flex-col items-center py-20 h-[570px]">
                        <p className="text-lg text-gray-500">No movies match the selected filters</p>
                        <button onClick={() => movieCtx?.removeFiltersBtn()} className="mt-4 bg-white border border-gray-500 px-2 cursor-pointer rounded-lg hover:bg-gray-200">Clear all filters</button>
                    </div>
                }
            </div>
        </section >
    )
}