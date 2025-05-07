'use client'

import { Filter } from "@/components/Filter";
import { Header } from "@/components/Header";

const Page = () => {
  return(
    <div className="w-screen h-screen bg-gray-200 text-black">
      <Header/>
      <Filter/>
    </div>
  )
}

export default Page;