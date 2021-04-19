
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { InfoScreen } from '../screens/InfoScreen';
import { Movie } from '../interfaces/interfaces';

export type RootStackParams = {
    HomeScreen: undefined,
    InfoScreen: Movie
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    // backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={ HomeScreen } />
            <Stack.Screen name="InfoScreen" component={ InfoScreen } />
        </Stack.Navigator>
    );
}