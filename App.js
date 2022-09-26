import React from 'react';

import MainPage from './src/Pages/mainPage';
import InfoScreen from './src/Pages/infoPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={MainPage} />
        <Screen name="Info" component={InfoScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
