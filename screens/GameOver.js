import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

export const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Text> I Guessed Corretly ! </Text>
            <Text> It took me {props.numOfRounds} rounds </Text>
            <Text> Your Number is : {props.userChoice} </Text>
            <Button title="Play Again?" onPress={props.onNewGame} />
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