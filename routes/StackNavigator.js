import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CustomNavigationBar from '../component/CustomNavigationBar';
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                header:(props) =><CustomNavigationBar {...props}></CustomNavigationBar>
            }}
    >
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='Detail' component={DetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default StackNavigator