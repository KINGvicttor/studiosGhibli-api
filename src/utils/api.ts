import { Movie } from "@/types/Movie";
import axios from "axios";

const url = axios.create({
    baseURL: "https://ghibliapi.vercel.app"
})

export const getFullMovieList = async () :Promise<Movie | any> => {
    const res = await url.get('/films');
    return res.data
}