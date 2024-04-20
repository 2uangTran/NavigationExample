import { StyleSheet,View } from "react-native";
import { Button, Text } from 'react-native-paper';

const HomeScreen = ({navigation}) => {
    return (
        <View style ={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Home Screen</Text>
            <Button mode="contained" onPress={() => navigation.navigate('Detail')}>
                Go to Details
            </Button>
        </View>
    );
}
export default HomeScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});