import React from 'react';
import { StyleSheet,View } from 'react-native';
import { Text,Button } from 'react-native-paper';

const DetailsScreen = ({navigation}) => {
    return (
        <View style ={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Details Screen</Text>
            <Button mode="contained" onPress={() => navigation.navigate('About')}>
                Go to Abouts
            </Button>
        </View>
    )
}
export default DetailsScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center"
    }
})