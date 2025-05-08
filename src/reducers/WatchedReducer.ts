import { MovieWatched } from "@/types/MovieWatched";

type addMovie = {
    type: 'add',
    payload: {
        id: number;
        image: string;
        title: string;
        original_title_romanised: string;
        director: string;
        producer: string;
        release_date: string;
        running_time: string;
        description: string;
        rt_score: string;
    }
}

type removeMovie = {
    type: 'remove',
    payload: {
        id: number;
    }
}

export type movieActionList = addMovie | removeMovie

export const WatchedReducer = (watchedList: MovieWatched[], movieAction: movieActionList) => {
    switch (movieAction.type) {
        case 'add':
            return [...watchedList, {
                id: movieAction.payload.id,
                image: movieAction.payload.image,
                title: movieAction.payload.title,
                original_title_romanised: movieAction.payload.original_title_romanised,
                director: movieAction.payload.director,
                producer: movieAction.payload.producer,
                release_date: movieAction.payload.release_date,
                running_time: movieAction.payload.running_time,
                description: movieAction.payload.description,
                rt_score: movieAction.payload.rt_score,
            }];
        case 'remove':
            return watchedList.filter(movie => movie.id !== movieAction.payload.id);
        default:
            return watchedList;
    }
}   