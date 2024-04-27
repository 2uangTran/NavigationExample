import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';
import AboutsScreen from '../screen/AboutsScreen';

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'tomato' }}
        labeled={true}
        screenOptions={{
        tabBar: (props) => <CustomTabNavigation {...props} />, // Thay đổi cách tab được render bằng cách sử dụng prop tabBar
    }}>
        <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
        <Tab.Screen name='Detail' component={DetailsScreen}></Tab.Screen>
        <Tab.Screen name='About' component={AboutsScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;