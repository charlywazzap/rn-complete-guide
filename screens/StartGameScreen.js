import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Card } from '../components/Card'
import { Input } from '../components/Input';
import Colors from '../constants/colors';

export const StartGameScreen = props => {
    const [value, setValue] = useState('');

    const inputHandler = inputValue => {
        console.log(inputValue)
        setValue(inputValue.replace(/[^0-9]/g,"") )
    }

    return (
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input style={ styles.input }
                        textAlign={'center'}
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2}
                        value={value}
                        onChangeText={inputHandler}
                        />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Confirm"  color={Colors.accent } onPress={() => {}} /></View>
                        <View style={styles.button}><Button title="Reset" color={Colors.primary} onPress={() => {}} /></View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    inputContainer: {
        width: 350,
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignContent: "center",
    },
    input: {
        width: 50,
        justifyContent:'center',
        alignContent: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: "center",
        paddingHorizontal: 15
    },
    button: {
        width: '55%',
        padding: 10,
    }
})