import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { useState, useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import FirstStage from './navigator/FirstStage';

import Remijs from './navigator/Remijs';
import Riks from './navigator/Riks';


SplashScreen.preventAutoHideAsync();

export default function App() {

  //Fonts loadings
  const [isLoaded] = useFonts({
    "Barriecito": require("./assets/fonts/Barriecito-Regular.ttf"),
    "IBM Plex": require("./assets/fonts/IBMPlexMono-Regular.ttf"),
    "IBM Plex Med": require("./assets/fonts/IBMPlexMono-Medium.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }
  //-----


  
  const Tab = createBottomTabNavigator();

  return (
    <View onLayout={handleOnLayout} style={{flex:1}}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Remijs' id='TabNav'   screenOptions={{headerShown: false}}>
          <Tab.Screen name="Remijs" component={Remijs} />
          <Tab.Screen name='Riks' component={Riks}/>
          <Tab.Screen name='Pirmais posms' component={FirstStage}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
});
