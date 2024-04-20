import React from 'react'
import {Drawer} from 'react-native-paper'
import { View, Text } from 'react-native'

const CustomDrawerNavigation = ({navigation}) => {
  return (
    <View style={{paddingTop:50}}>
        <Drawer.Section>
            <Drawer.Item
                label='Home'
                icon={'home'}
                onPress={() => navigation.navigate('Home')}
            >
            </Drawer.Item>
             <Drawer.Item
                label='Detail'
                icon={'format-list-bulleted'}
                onPress={() => navigation.navigate('Detail')}
            >
            </Drawer.Item>
            <Drawer.Item
                label='Abouts'
                icon={'account-details'}
                onPress={() => navigation.navigate('About')}
            >
            </Drawer.Item>
        </Drawer.Section>
    </View>
  )
}

export default CustomDrawerNavigation