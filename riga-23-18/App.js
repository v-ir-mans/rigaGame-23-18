import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import LetterPhotoInput from "./components/LetterPhotoInput";
import Card from './shared/card';

import { useState, useCallback } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



SplashScreen.preventAutoHideAsync();

export default function App() {
  
  function breakStringIntoObjects(str) {
    const objectsList = [];
  
    for (let i = 0; i < str.length; i++) {
      const symbol = str[i];
      const set = false;
      const key = (i + 1).toString();
  
      const obj = { symbol, set, key };
      objectsList.push(obj);
    }
  
    return objectsList;
  }

  const [symbols, setSymbols]=useState(breakStringIntoObjects("Armands"))

  const pressHandler = (key) => {
    setSymbols((prevSymbols) => {
      const modifiedList = prevSymbols.map(obj => {
        if (obj.key === key) {
          return { ...obj, set: true };
        }
        return obj;
      });
    
      return modifiedList;
    })
  }

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


  return (
    <View style={styles.container} onLayout={handleOnLayout}>
      <View style={styles.margin}>
        <FlatList
          data={symbols}
          renderItem={({item}) => {
          return(
            <Card>
              <LetterPhotoInput symbolItem={item} pressHandler={pressHandler}></LetterPhotoInput>
            </Card>
          )
        }}
        />   
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  margin: {
    marginTop: 60,
    margin:10,
  },
  LPI:{
    marginBottom:12
  }
});
