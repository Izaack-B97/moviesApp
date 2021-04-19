import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { MovieFull } from '../interfaces/interfaces';
import { Cast } from '../interfaces/creditsInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ( { movieFull, cast } : Props ) => {   
    
    return (
        <>
            {/* Detalles */}
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star" size={ 20 } color="gold"/>
                    <Text style={{ marginTop: 2, marginHorizontal: 5 }}>{ movieFull.vote_average }</Text>
                    <Text style={{ marginTop: 2 }}>
                        - { movieFull.genres.map( g => g.name).join(', ') }
                    </Text>
                </View>
                
                <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 10 }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>{ movieFull.overview }</Text>
                
                <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 10 }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 16 }}>{ currencyFormatter.format( movieFull.budget, { code: 'USD' } ) }</Text>
            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 10 }}>
                    Actores
                </Text>
                <FlatList 
                    style={{  padding: 10, height: 100, /* backgroundColor: 'red' */ }}
                    data={ cast }
                    keyExtractor={ ( item ) => item.id.toString() }
                    renderItem={ ( { item } ) => <CastItem actor={ item }/>}
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                />
            </View>
        </>
    )
}
