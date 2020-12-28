import React, {useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert} from 'react-native'
import {NumberContainer} from '../components/NumberContainer'
import { Card } from '../components/Card'
import Colors from '../constants/colors'

//useRef allows you to define a var that will survive component renders 

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor((Math.random()) * (max -min )) + min;
    return randNum === exclude ?  generateRandomBetween(min, max, exclude) : randNum;
}

export const GameScreen = props => {
    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    const rounds = useRef(0)
    const [currentGuess, setCurrentGuess ] = useState(generateRandomBetween(currentLow.current,currentHigh.current,props.userChoice))
    // runs after render
    const { userChoice, onGameWon } = props;
    useEffect(()=>{
        if (isGuessCorrect(currentGuess)) {onGameWon(rounds.current)}
    },[currentGuess,])

    const nextGuessHandler = direction => {
        if(isGreaterHintTrue(direction)) { showInvalidAlert(" You know this is wrong..., the number should be lower"); return}
        if(isLowerHintTrue(direction)) { showInvalidAlert(" You know this is wrong..., the number should be higher"); return}
        direction === 'lower' ?  currentHigh.current = currentGuess : currentLow.current = currentGuess;
        const nextNum = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess)
        setCurrentGuess(nextNum)
        rounds.current++
    }

    const showInvalidAlert = (text) =>  Alert.alert("Sneaky User...,",text,[{text:"Sorry", style: 'cancel'}])
    const isGreaterHintTrue = hint => hint === 'lower' && currentGuess < userChoice ;
    const isLowerHintTrue = hint =>  hint ==='greater' && currentGuess > userChoice ;
    const isGuessCorrect = guess => guess === userChoice;


    return (
        <View style={styles.screen}>
            <Text>Computer's Guess </Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Lower" onPress={nextGuessHandler.bind(this, 'lower')} color={Colors.accent } />
                    </View>
                <View style={styles.button}>
                    <Button title="Greater" onPress={nextGuessHandler.bind(this, 'greater')}color={Colors.primary }  />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex:1,
        padding: 10,
        alignItems:'center',

    },
    buttonContainer :{
        width: 350,
        maxWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    button : {
        width: '55%',
        padding: 10,
    }
})
