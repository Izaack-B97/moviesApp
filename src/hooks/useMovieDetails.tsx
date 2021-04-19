import { useState, useEffect } from 'react';
import { moviesDB } from '../api/moviesDB';
import { MovieFull } from '../interfaces/interfaces'
import { Cast, CreditsRespose } from '../interfaces/creditsInterfaces';

interface MovieDetails {
    isLoading      : boolean,
    movieFull     ?: MovieFull,
    cast           : Cast[]
}

export const useMovieDetails = ( movieId : number ) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })
    
    const getMovieDetails = async () => {
        const movieDetailsPromise = moviesDB.get<MovieFull>(`/${ movieId }`);
        const creditsPromise = moviesDB.get<CreditsRespose>(`/${ movieId }/credits`);

        const [ movieDetailsResp, creditsResp ] = await Promise.all([ movieDetailsPromise, creditsPromise ]);
        
        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: creditsResp.data.cast
        });
    }

    useEffect(() => {
        getMovieDetails();
    }, [ ])

    return {
        ...state
    }
}
