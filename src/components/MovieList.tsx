import { MovieContext } from "@/contexts/MovieContext"
import { useContext } from "react"


export const MovieList = () => {

    const movieCtx = useContext(MovieContext)

    return (
        <section className="mt-10">
            <div className="container mx-auto h-auto pb-10 px-10 flex justify-center items-center flex-wrap gap-x-10 gap-y-10">
                {movieCtx?.moviesData.slice(0,8).map((movie, index) => (
                    <div className="w-[302px] h-[911px] rounded-lg hover:shadow-2xl hover:ease-in-out hover:duration-500" key={index}>

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
                                <p className="text-sm">{movie.description.substring(0,120)}...</p>
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
                            <div className="flex justify-center items-center w-[268px] h-[36px] border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200">
                                <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p className="text-sm ml-2">Mark Watched</p>
                            </div>
                            <div className="flex justify-center items-center w-[268px] h-[36px] border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200">
                                <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                </svg>
                                <p className="text-sm ml-2">Mark Favorite</p>
                            </div>
                            <div className="flex justify-center items-center w-[268px] h-[36px] border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200">
                                <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
                                </svg>
                                <p className="text-sm ml-2">Add Notes</p>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </section>
    )
}