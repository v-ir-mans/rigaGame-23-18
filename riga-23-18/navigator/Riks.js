import { StyleSheet, Text, View, Button } from 'react-native';
import { useContext } from 'react';
import { UserContext } from '../shared/UserContext';

function Riks() {
    const {data: userData, update: userUpdate }=useContext(UserContext)
    return ( 
        <View style={{backgroundColor:"#0FF", margin:50}}>
            <Text>Riks</Text>
            <Button title='Spied' onPress={() => userUpdate()}/>
        </View>
        
     );
}

export default Riks;