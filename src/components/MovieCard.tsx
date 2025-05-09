import { MovieContext } from "@/contexts/MovieContext";
import { useContext } from "react";

type Props = {
    id: number
    movie: any;
    watched: boolean;
    favorite: boolean;
}

export const MovieCard = ({ id, movie, watched, favorite }: Props) => {

    const movieCtx = useContext(MovieContext)

    const toggleWatch = (id: number, movie: any) => {
        const btn = document.querySelectorAll("#watchBtn");

        if (btn[id].innerHTML === 'Mark Watched') {
            movieCtx?.addWatchedMovie(id, movie);
            btn[id].innerHTML = "Watched";
            btn[id].classList.add('bg-black', 'text-white', 'border-black', 'hover:bg-black/80')
            btn[id].classList.remove('hover:bg-gray-200', 'border-gray-500')
        } else if (btn[id].innerHTML === 'Watched') {
            movieCtx?.removeWatchedMovie(id);
            btn[id].innerHTML = "Mark Watched";
            btn[id].classList.remove('bg-black', 'text-white', 'border-black', 'hover:bg-black/80')
            btn[id].classList.add('hover:bg-gray-200', 'border-gray-500')
        }
    }

    const toggleFavorite = (id: number, movie: any) => {
        const btn = document.querySelectorAll("#favoriteBtn");

        if (btn[id].innerHTML === 'Mark Favorite') {
            
            btn[id].innerHTML = "Favorite";
            btn[id].classList.add('bg-red-600', 'text-white', 'border-red', 'hover:bg-red/80')
            btn[id].classList.remove('hover:bg-gray-200', 'border-gray-500')
        } else if (btn[id].innerHTML === 'Favorite') {
            
            btn[id].innerHTML = "Mark Favorite";
            btn[id].classList.remove('bg-red-600', 'text-white', 'border-red', 'hover:bg-red-600/80')
            btn[id].classList.add('hover:bg-gray-200', 'border-gray-500')
        }
    }


    return (
        <div className="w-[302px] h-[911px] rounded-lg hover:shadow-2xl hover:ease-in-out hover:duration-500">

            {/* Card image */}
            <div className="w-full h-[450px]">
                <div className="w-[302px] h-[452px] flex justify-center items-center absolute text-transparent bg-transparent rounded-t-lg hover:bg-black/50 hover:text-white">
                    <p>{movie.original_title_romanised}</p>
                </div>
                <img
                    className="rounded-t-lg"
                    src={movie.image} />
            </div>

            {/* Card Content */}
            <div className="w-full h-[311px] px-3 py-3 bg-white">
                <h1 className="text-xl font-bold">{movie.title}</h1>
                <p className="text-sm mt-1">{movie.release_date} <span>•</span> {movie.running_time} min</p>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex">
                        <svg className="w-6 h-6 text-yellow-500 fill-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <p className="ml-1 mt-0.5">{movie.rt_score}%</p>
                    </div>
                    <div>
                        <p className="text-sm">Not rated</p>
                    </div>
                </div>
                <div className="w-full text-justify mt-2">
                    <p className="text-sm">{movie.description.substring(0, 120)}...</p>
                    <button className="flex items-center text-sm text-gray-600 rounded-lg mt-2 hover:bg-gray-200">
                        <svg className="w-6 h-6 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4" />
                        </svg>
                        Read More
                    </button>
                </div>
                <div>
                    <p className="text-sm mt-2 text-gray-600">Director: {movie.director}</p>
                    <p className="text-sm mt-2 text-gray-600">Producer: {movie.producer}</p>
                </div>
            </div>

            {/* Card Actions */}
            <div className="w-full h-[148px] flex flex-col justify-around items-center bg-white rounded-b-lg">
                <div className="flex justify-center items-center w-[268px] h-[36px] ">
                    {/* Verificação de qual estilo de botão usar */}
                    {!watched &&
                        <button onClick={() => toggleWatch(id, movie)} id="watchBtn" className="flex w-full h-full justify-center items-center border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200">
                            Mark Watched
                        </button>
                    }
                    {watched &&
                        <button onClick={() => toggleWatch(id, movie)} id="watchBtn" className="flex w-full h-full justify-center items-center text-white border border-black rounded-lg cursor-pointer bg-black hover:bg-black/80">
                            Watched
                        </button>
                    }
                </div>
                <div className="flex justify-center items-center w-[268px] h-[36px]">
                    {/* Verificação de qual estilo de botão usar */}
                    {!favorite &&
                        <button onClick={() => toggleFavorite(id, movie)} id="favoriteBtn" className="flex w-full h-full justify-center items-center border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200">
                            Mark Favorite
                        </button>
                    }
                    {favorite &&
                        <button onClick={() => toggleFavorite(id, movie)} id="favoriteBtn" className="flex w-full h-full justify-center items-center text-white border border-red rounded-lg cursor-pointer bg-red-600 hover:bg-red-600/80">
                            Favorite
                        </button>
                    }
                </div>
                <div className="flex justify-center items-center w-[268px] h-[36px]">
                    Add Notes
                </div>
            </div>
        </div >
    )
}