import React, { useRef } from 'react'
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {
    
    const { opacity, fadeIn, fadeOut } = useFade();    

    return (
        <View 
            style={{ 
                backgroundColor: 'grey',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
    
            <Animated.View style={{
                backgroundColor: 'green',
                height: 150,
                width: 150,
                borderColor: 'white',
                borderWidth: 10,
                opacity
            }}/>

            <Button title="FadeIn" onPress={ fadeIn }/>
            <Button title="FadeOut" onPress={ fadeOut }/>
    
        </View>
    )
}
