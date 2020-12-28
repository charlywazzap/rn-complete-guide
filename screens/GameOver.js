import React from 'react'
import { View, Text, StyleSheet, Button, Image} from 'react-native'
import { BodyText } from '../components/BodyText';
import { TitleText } from '../components/TitleText'
// you can use local and network images
export const GameOver = props => {
    return (
        <View style={styles.screen}>
            <TitleText> I Guessed Correctly ! </TitleText>
            <View style={styles.imageContiner}>    
                <Image 
                    resizeMode={'stretch'}
                    style={styles.image} 
                    source={require('../assets/success.png')} 
                />
            </View>
            <BodyText> It took me {props.numOfRounds} rounds </BodyText>
            <BodyText> Your Number is : {props.userChoice} </BodyText>
            <Button title="Play Again?" onPress={props.onNewGame} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        padding: 20,
        alignItems:'center',
    },
    image:{
        width: '100%',
        height: '100%',
    },
    imageContiner: {
        marginVertical: 30,
        width: '80%',
        height: 300,
        borderRadius: 500,
        borderWidth:3,
        borderColor: 'black',
        overflow: 'hidden', // this allows the image not to overflow
    }
})