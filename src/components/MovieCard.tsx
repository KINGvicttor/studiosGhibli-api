import { MovieContext } from "@/contexts/MovieContext";
import { Movie } from "@/types/Movie";
import { useContext } from "react";
import { toast } from "react-toastify";

type Props = {
    index: number
    movie: Movie;
}

export const MovieCard = ({ index, movie }: Props) => {

    const movieCtx = useContext(MovieContext)

    {/* Função que altera marcado como visto */ }
    const toggleWatchedBtn = (index: number) => {
        const btn = document.querySelectorAll("#watchBtn");

        if (btn[index].innerHTML === "Mark Watched") {
            movieCtx?.toggleWatched(index, true);
            btn[index].innerHTML = "Watched";
            btn[index].classList.remove('border-gray-500', 'hover:bg-gray-200');
            btn[index].classList.add('border-black', 'bg-black', 'text-white', 'hover:bg-black/80');
            toast("Marked as Watched!");
        } else if (btn[index].innerHTML === "Watched") {
            movieCtx?.toggleWatched(index, false);
            btn[index].innerHTML = "Mark Watched";
            btn[index].classList.remove('border-black', 'bg-black', 'text-white', 'hover:bg-black/80');
            btn[index].classList.add('border-gray-500', 'hover:bg-gray-200');
            toast("Unmarked as Watched!");
        }
    }

    {/* Função que altera marcado como favorito */ }
    const toggleFavoriteBtn = (index: number) => {
        const btn = document.querySelectorAll("#favoriteBtn")

        if (btn[index].innerHTML === "Mark Favorite") {
            movieCtx?.toggleFavorite(index, true);
            btn[index].innerHTML = "Favorite";
            btn[index].classList.remove('border-gray-500', 'hover:bg-gray-200');
            btn[index].classList.add('border-red-600', 'bg-red-600', 'text-white', 'hover:bg-red-600/80');
            toast("Marked as Favorite :)");
        } else if (btn[index].innerHTML === "Favorite") {
            movieCtx?.toggleFavorite(index, false);
            btn[index].innerHTML = "Mark Favorite";
            btn[index].classList.remove('border-red-600', 'bg-red-600', 'text-white', 'hover:bg-red-600/80');
            btn[index].classList.add('border-gray-500', 'hover:bg-gray-200');
            toast("Unmarked as Favorite :(");
        }
    }

    {/* Função para editar notas */ }
    const editNoteBtn = (index: number) => {

        const note = movieCtx?.movieList[index].note
        const newNote = window.prompt("Type your note:", note )

        movieCtx?.editNote(index, newNote)

        toast('Notes changed!')
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
                <div className="bg-blue-200 w-full h-[50px] mt-2 flex flex-col justify-start items-start">
                    <p className="text-md text-blue-400 ml-2">Your notes:</p>
                    <p className="text-sm text-blue-400 ml-2">{movie.note}</p>
                </div>
            </div>

            {/* Card Actions */}
            <div className="w-full h-[148px] flex flex-col justify-around items-center bg-white rounded-b-lg">
                <div className="flex justify-center items-center w-[268px] h-[36px] ">
                    {!movie.watched &&
                        <button onClick={() => toggleWatchedBtn(index)} id="watchBtn" className="flex w-full h-full justify-center items-center border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200">
                            Mark Watched
                        </button>
                    }
                    {movie.watched &&
                        <button onClick={() => toggleWatchedBtn(index)} id="watchBtn" className="flex w-full h-full justify-center items-center border border-black bg-black text-white rounded-lg cursor-pointer hover:bg-black/80">
                            Watched
                        </button>
                    }
                </div>
                <div className="flex justify-center items-center w-[268px] h-[36px]">
                    {!movie.favorite &&
                        <button onClick={() => toggleFavoriteBtn(index)} id="favoriteBtn" className="flex w-full h-full justify-center items-center border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200">
                            Mark Favorite
                        </button>
                    }
                    {movie.favorite &&
                        <button onClick={() => toggleFavoriteBtn(index)} id="favoriteBtn" className="flex w-full h-full justify-center items-center border border-red-600 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-600/80">
                            Favorite
                        </button>
                    }
                </div>
                <div className="flex justify-center items-center w-[268px] h-[36px]">
                    <button onClick={() => editNoteBtn(index)} id="favoriteBtn" className="flex w-full h-full justify-center items-center border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200">
                        Edit notes
                    </button>
                </div>
            </div>
        </div >
    )
}