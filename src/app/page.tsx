'use client'

import { Filter } from "@/components/Filter";
import { Header } from "@/components/Header";
import { MovieList } from "@/components/MovieList";
import { MovieContextProvider } from "@/contexts/MovieContext";
import { ToastContainer } from "react-toastify";

const Page = () => {
  return (
    <MovieContextProvider>
      <div className="bg-gray-200 text-black">
        <Header />
        <Filter />
        <MovieList />
        <ToastContainer />
      </div>
    </MovieContextProvider>
  )
}

export default Page;