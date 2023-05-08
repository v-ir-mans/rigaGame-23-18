import { StyleSheet} from 'react-native';

import SymbolDisplay from './pages/SymbolDisplay';
import Camera from './pages/CameraPage';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function FirstStage() {

  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="SymbolDisplay" component={SymbolDisplay}/>
      <Stack.Screen name='Camera' component={Camera}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create();
