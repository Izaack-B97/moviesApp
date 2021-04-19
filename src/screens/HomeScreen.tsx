import React from 'react'

import { View, useWindowDimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

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

    if ( isLoading ) {
        return <LoadingElement />
    }

    return (
        <View>
            <ScrollView>
                {/* Carousel  de peliculas */}
                <View style={{ height:  440, marginTop: top + 20 /* , backgroundColor: 'red'  */ }}>
                    <Carousel 
                        data={ nowPlaying  } 
                        renderItem={ ({ item } : any) => <MoviePoster movie={ item }/> }
                        sliderWidth={ fullWidthScreen }
                        itemWidth={ 300 }
                    /> 
                </View>         
                {/* Seccion de categorias */}
                <HorizontalSlider title="Now Playing" movies={ nowPlaying  }/>
                <HorizontalSlider title="Popular" movies={ popular }/>
                <HorizontalSlider title="Top Rated" movies={ topRated }/>
                <HorizontalSlider title="Upcoming" movies={ upComing }/>
            </ScrollView>
        </View>
    )
}
