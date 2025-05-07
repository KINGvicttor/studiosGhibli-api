'use client'

import { Filter } from "@/components/Filter";
import { Header } from "@/components/Header";
import { MovieList } from "@/components/MovieList";

const Page = () => {
  return(
    <div className="bg-gray-200 text-black">
      <Header/>
      <Filter/>
      <MovieList/>
    </div>
  )
}

export default Page;