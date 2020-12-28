import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import { BodyText } from '../components/BodyText';
import { TitleText } from '../components/TitleText'

export const GameOver = props => {
    return (
        <View style={styles.screen}>
            <TitleText> I Guessed Correctly ! </TitleText>
            <BodyText> It took me {props.numOfRounds} rounds </BodyText>
            <BodyText> Your Number is : {props.userChoice} </BodyText>
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