import { StyleSheet, Text, View, FlatList } from 'react-native';

import LetterPhotoInput from '../../components/LetterPhotoInput';
import Card from '../../shared/card';

import { useState, useCallback } from 'react';

export default function SymbolDisplay({ navigation }) {
  
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

  const [symbols, setSymbols]=useState(breakStringIntoObjects("Armands18"))

  function getItemByKey(objectsList, key) {
    for (let i = 0; i < objectsList.length; i++) {
      if (objectsList[i].key === key) {
        return objectsList[i];
      }
    }
  
    return null; // Return null if no matching item is found
  }

  const openStack = (key) => {
    cur_item=getItemByKey(symbols, key)
    if (cur_item) {
      console.log(cur_item)
      navigation.navigate("Camera")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.margin}>
        <FlatList
          data={symbols}
          renderItem={({item}) => {
          return(
            <Card>
              <LetterPhotoInput symbolItem={item} pressHandler={openStack}></LetterPhotoInput>
            </Card>
          )
        }}
        />   
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  margin: {
    margin:10,
  },
  LPI:{
    marginBottom:12
  }
});