import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Text> I Guessed Corretly - It took me {props.numOfRounds} rounds </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        padding: 10,
        alignItems:'center',
    },

})