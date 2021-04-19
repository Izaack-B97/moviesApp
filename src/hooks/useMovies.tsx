import React from 'react';
import { useEffect, useState } from "react"
import { View, ActivityIndicator } from 'react-native';
import { moviesDB } from "../api/moviesDB"
import { MoviesDBResponse, Movie } from '../interfaces/interfaces';

interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upComing: Movie[]
}

const LoadingElement = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
        }}>
            <ActivityIndicator color="blue" size={ 100 }/>
        </View>
    )
};

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState( true );
    const [ moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: []
    });
    
    const getMovies = async () => {
        const nowPlaying = moviesDB.get<MoviesDBResponse>('/now_playing')
        const popular = moviesDB.get<MoviesDBResponse>('/popular');
        const topRated = moviesDB.get<MoviesDBResponse>('/top_rated');
        const upcoming = moviesDB.get<MoviesDBResponse>('/upcoming');

        const responses = await Promise.all([ nowPlaying, popular, topRated, upcoming ])

        setMoviesState({
            nowPlaying: responses[0].data.results,
            popular: responses[1].data.results,
            topRated: responses[2].data.results,
            upComing: responses[3].data.results
        });

        setIsLoading( false );
    }
    
    useEffect(() => {
        getMovies();
    }, [])

    return {
        ...moviesState,
        isLoading,
        LoadingElement
    }
}
