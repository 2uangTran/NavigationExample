import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import CustomDrawerNavigation from '../component/CustomDrawerNavigation';
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';
import AboutsScreen from '../screen/AboutsScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
   <Drawer.Navigator initialRouteName='Home' drawerContent={props => <CustomDrawerNavigation {...props}></CustomDrawerNavigation>}> 
        <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name='Detail' component={DetailsScreen}></Drawer.Screen>
        <Drawer.Screen name='About' component={AboutsScreen}></Drawer.Screen>
   </Drawer.Navigator>
  )
}

export default DrawerNavigator