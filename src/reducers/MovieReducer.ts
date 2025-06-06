import { Movie } from "@/types/Movie";

type addMovieData = {
    type: 'addMovieData'
    payload: {
        image: string;
        title: string;
        original_title_romanised: string;
        director: string;
        producer: string;
        release_date: string;
        running_time: string;
        description: string;
        rt_score: string;
        watched: boolean;
        favorite: boolean;
        note: string;
    }
}


type toggleWatched = {
    type: 'toggleWatched',
    payload: {
        id: number;
        watched: boolean;
    }
}

type toggleFavorite = {
    type: 'toggleFavorite',
    payload: {
        id: number;
        favorite: boolean
    }
}

type editNote = {
    type: 'editNote',
    payload: {
        id: number,
        note: string
    }
}

export type movieActionList = addMovieData | toggleWatched | toggleFavorite | editNote

export const MovieReducer = (movieList: Movie[], movieAction: movieActionList): Movie[] => {

    switch (movieAction.type) {
        case 'addMovieData':
            return [...movieList, {
                id: movieList.length,
                image: movieAction.payload.image,
                title: movieAction.payload.title,
                original_title_romanised: movieAction.payload.original_title_romanised,
                director: movieAction.payload.director,
                producer: movieAction.payload.producer,
                release_date: movieAction.payload.release_date,
                running_time: movieAction.payload.running_time,
                description: movieAction.payload.description,
                rt_score: movieAction.payload.rt_score,
                watched: movieAction.payload.watched,
                favorite: movieAction.payload.favorite,
                note: movieAction.payload.note
            }];

        case 'toggleWatched':
            movieList[movieAction.payload.id].watched = movieAction.payload.watched;
            return movieList;
            
        case 'toggleFavorite':
            movieList[movieAction.payload.id].favorite = movieAction.payload.favorite;
            return movieList;
            
        case 'editNote':
            movieList[movieAction.payload.id].note = movieAction.payload.note;
            return movieList;
            
        default:
            return movieList;
    }
}   