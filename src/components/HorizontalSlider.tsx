import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MoviePoster } from './MoviePoster';
import { Movie } from '../interfaces/interfaces';

interface Props {
    title ?: string,
    movies : Movie[]
}

export const HorizontalSlider = ( { title , movies } : Props ) => {
    return (
        <View 
            style={{ 
                /* backgroundColor: 'red', */ 
                height: title ? 250 : 210 
            }}
        >
            { title && <Text style={ styles.title }>{ title }</Text> }
            <FlatList
                data={ movies }
                renderItem={ ( { item } : any ) => <MoviePoster  movie={ item } width={ 120 } height={ 180 } />} 
                keyExtractor={ item => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10
    }
});
