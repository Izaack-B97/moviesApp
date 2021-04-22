import 'react-native-gesture-handler';

import React from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';


const AppState = ( { children } : any ) => {
    return(
      <GradientProvider>
        { children }
      </GradientProvider>
    )
}

const App = () => {
  
  return (
    <NavigationContainer>  
      <AppState>
        <StackNavigator />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  )
}

export default App;