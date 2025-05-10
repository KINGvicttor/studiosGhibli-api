import { MovieContext } from "@/contexts/MovieContext"
import { useContext, useEffect } from "react"
import { MovieCard } from "./MovieCard"


export const MovieList = () => {

    const movieCtx = useContext(MovieContext)

    return (
        <section className="mt-10">
            <div className="container mx-auto h-auto pb-10 px-25 flex justify-start items-center flex-wrap gap-x-10 gap-y-10">

                {/* Lista com todos os filmes sem filtro */}
                {movieCtx?.removeFilters &&
                    movieCtx?.movieList.slice(0, 8).map((movie, index) => (
                        <MovieCard key={index} index={index} movie={movie} />
                    ))
                }

                {/* Lista com filmes marcados como visto */}
                {movieCtx?.showWatched &&
                    movieCtx?.movieList.filter((movie) => movie.watched === true).slice(0,8).map((movie, index) => (
                        <MovieCard key={index} index={index} movie={movie}/>
                    ))
                }

                {/* Lista com filmes marcados como favoritos */}
                {movieCtx?.showFavorite &&
                    movieCtx?.movieList.filter((movie) => movie.favorite === true).slice(0,8).map((movie, index) => (
                        <MovieCard key={index} index={index} movie={movie}/>
                    ))
                }
            </div>
        </section >
    )
}