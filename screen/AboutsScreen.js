import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const AboutsScreen = () => {
  return (
    <View style={mystyles.container}>
      <Text>Abouts Screen</Text>
    </View>
  )
}

const mystyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default AboutsScreen