import { MovieContext } from "@/contexts/MovieContext"
import { useContext } from "react"

export const Filter = () => {

    const movieCtx = useContext(MovieContext);

    return (
        <section>
            <div className="container mx-auto flex flex-col px-26">

                {/* Input de pesquisa*/}
                <div className="w-full h-[40px] flex justify-center items-center">
                    <svg className="w-6 h-6 mr-[-25px] text-gray-500 z-10 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                    <input
                        className="bg-white w-full h-full outline-black border border-gray-500 rounded-lg px-10"
                        type="search"
                        name=""
                        id=""
                        placeholder="Search movies..." />
                </div>

                {/* Filtro incluir pesquisa / drop-menu com filtros diversos */}
                <div className="w-full h-[40px] mt-6 flex justify-between items-center">
                    <div className="flex items-center h-full">
                        <input
                            className="h-4"
                            type="checkbox"
                            name=""
                            id="synopsis" />
                        <label className="text-gray-600 ml-2" htmlFor="synopsis">Include synopsis in search</label>
                    </div>
                    <div className="h-full">
                        <div className="flex justify-center items-center float-left overflow-hidden">
                            <button className="flex justify-between px-3 py-2 w-50 h-10 bg-white outline-black border border-gray-500 rounded-lg cursor-pointer">
                                Default
                                <svg className="w-6 h-6 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filtrar por visto, favoritos, com anotações ou por nota */}
                <div className="w-full h-[40px] flex">
                    <div className="w-full h-[40px] flex items-center">
                        <div className="w-[50%] flex items-center">
                            <p className="text-sm">Filters:</p>
                            <button onClick={() => movieCtx?.showWatchedBtn()} className="flex px-3 py-2 ml-8 cursor-pointer rounded-lg hover:bg-gray-100 hover:opacity-50">
                                <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p className="text-sm ml-1">Watched</p>
                            </button>
                            <button className="flex px-3 py-2 ml-8 cursor-pointer rounded-lg hover:bg-gray-100 hover:opacity-50">
                                <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                </svg>
                                <p className="text-sm ml-1">Favorites</p>
                            </button>
                            <button className="flex px-3 py-2 ml-8 cursor-pointer rounded-lg hover:bg-gray-100 hover:opacity-50">
                                <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
                                </svg>
                                <p className="text-sm ml-1">With notes</p>
                            </button>
                            <button className="flex px-3 py-2 ml-8 bg-white border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200">
                                <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                                </svg>
                                <p className="text-sm ml-1">Rating</p>
                            </button>
                        </div>
                        <div className="w-[50%] h-[40px] flex justify-end items-center">
                            <button onClick={() => movieCtx?.removeFiltersBtn()} className="bg-transparent px-3 rounded-lg cursor-pointer text-sm hover:underline">Clear All Filters</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}