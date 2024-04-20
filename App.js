import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import DrawerNavigator from './routes/DrawerNavigator';
import StackNavigator from './routes/StackNavigator';
import TabNavigator from './routes/TabNavigator';

const Stack = createStackNavigator();
const App=()=> {
  return (
    <PaperProvider>
      <NavigationContainer>
          <StackNavigator></StackNavigator>
          {/* <DrawerNavigator></DrawerNavigator> */}
          {/* <TabNavigator></TabNavigator> */}
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App;