
import { StyleSheet, Text, View, Button } from 'react-native';
import { useContext } from 'react';

function Remijs({ navigation }) {
    return ( 
        <View style={{backgroundColor:"#FF1", margin:50}}>
            <Text>Remijs</Text>
            <Button title='Spied' onPress={() => navigation.navigate('Riks')}/>
        </View>
        
     );
}

export default Remijs;