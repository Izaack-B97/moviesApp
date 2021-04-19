import React from 'react'
import { View, Dimensions, Image, StyleSheet, ScrollView, Text, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps <RootStackParams, 'InfoScreen'>{}

const { height: heightWindow } = Dimensions.get('window');

export const InfoScreen = ( { route, navigation } : Props ) => {
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`;

    const { isLoading, movieFull, cast } = useMovieDetails( movie.id );

    return (
            <ScrollView >
                <View style={ styles.imageContainer }>
                    <Image source={{ uri }} style={ styles.image }/>
                </View>
                <View style={ styles.containerrInfo }>
                    <Text style={ styles.subtitle }>{ movie.original_title }</Text>
                    <Text style={ styles.title }>{ movie.title }</Text>
                    { 
                        isLoading 
                            ? <ActivityIndicator color="blue" size={ 50 } style={{ marginTop: 35 }}/>
                            : 
                            (
                                <MovieDetails movieFull={ movieFull ! } cast={ cast }/>
                            )
                    }
                </View>
                <View style={ styles.backButton }>
                    <TouchableOpacity
                        onPress={ () => navigation.goBack() }
                    >
                        <Icon name="arrow-back-outline" color="white" size={ 30 }/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: heightWindow * 0.7,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25 ,
        // backgroundColor: 'red',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        
        elevation: 16, 
    },
    image: {
        flex: 1,
    },
    containerrInfo: {
        marginHorizontal: 20, 
        marginTop: 10
    },
    subtitle: {
        fontSize: 14,
        opacity: 0.6
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 99,
        elevation: 16,
        top: 30,
        left: 5
    }
});
