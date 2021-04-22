import React, { useContext, useEffect } from 'react'

import { View, useWindowDimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/core';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';


export const HomeScreen = () => {

    const { 
        nowPlaying,
        popular,
        topRated,
        upComing,
        LoadingElement,
        isLoading, 
    } = useMovies();
    /* const { navigate } =  useNavigation() */

    const { top } = useSafeAreaInsets();
    const { width: fullWidthScreen } = useWindowDimensions();
    const { setMainColors } = useContext( GradientContext )

    const getPosterColors = async ( index : number ) => {
        const movie = nowPlaying[ index ]
        const uri = `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`;
        
        const { primary, secondary } = await getImageColors( uri );

        setMainColors({ primary, secondary });

    }

    useEffect(() => {
        if ( nowPlaying.length > 0 ) {
            getPosterColors(0);
        }
    }, [ nowPlaying ])


    if ( isLoading ) {
        return <LoadingElement />
    }

    return (
        <GradientBackground>
            <ScrollView>
                {/* Carousel  de peliculas */}
                <View style={{ height:  440, marginTop: top + 20 /* , backgroundColor: 'red'  */ }}>
                    <Carousel 
                        data={ nowPlaying  } 
                        renderItem={ ({ item } : any) => <MoviePoster movie={ item }/> }
                        sliderWidth={ fullWidthScreen }
                        itemWidth={ 300 }
                        onSnapToItem={ index => getPosterColors( index ) }
                    /> 
                </View>         
                {/* Seccion de categorias */}
                <HorizontalSlider title="Now Playing" movies={ nowPlaying  }/>
                <HorizontalSlider title="Popular" movies={ popular }/>
                <HorizontalSlider title="Top Rated" movies={ topRated }/>
                <HorizontalSlider title="Upcoming" movies={ upComing }/>
            </ScrollView>
        </GradientBackground>
    )
}
