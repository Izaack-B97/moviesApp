import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterfaces';

interface Props {
    actor: Cast
}

export const CastItem = ( { actor } : Props ) => {
    
    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;

    return (
        <View style={ styles.container }>
            { actor.profile_path && <Image source={{ uri }} style={{ height: 50, width: 50 }}/> }
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{ actor.name }</Text>
                <Text>{ actor.character }</Text>
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        // width: 200,
        flexDirection: 'row',
        backgroundColor: 'white',
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        
        elevation: 16, 
        borderRadius: 10,
        paddingRight: 10,
        marginHorizontal: 5,
        height: 50
    }
});
