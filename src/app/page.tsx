'use client'

import { Filter } from "@/components/Filter";
import { Header } from "@/components/Header";
import { MovieList } from "@/components/MovieList";
import { MovieContextProvider } from "@/contexts/MovieContext";

const Page = () => {
  return (
    <MovieContextProvider>
      <div className="bg-gray-200 text-black">
        <Header />
        <Filter />
        <MovieList />
      </div>
    </MovieContextProvider>
  )
}

export default Page;