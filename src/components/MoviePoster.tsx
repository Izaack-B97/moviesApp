import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/interfaces';
import { useNavigation } from '@react-navigation/core';

interface Props {
    movie   : Movie,
    width  ?: number, 
    height ?: number
}

export const MoviePoster = ( { movie, width = 290 ,height = 420 } : Props ) => {
    
    const uri = `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            activeOpacity={ 0.8 }
            style={{ 
                ...styles.imageContainer, 
                width, 
                height 
            }} 
            onPress={ () => navigation.navigate( 'InfoScreen', movie ) }
        >
                <Image source={{ uri }} style={ styles.image }/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        
        elevation: 16, 
        marginHorizontal: 5,
    },
    image: {
        flex: 1,
        borderRadius: 18
    }
});