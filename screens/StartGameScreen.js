import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Confirm"  onPress={() => {}} /></View>
                    <View style={styles.button}><Button title="Reset" color="red" onPress={() => {}} /></View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 6,
        backgroundColor: 'white',
        elevation: 10,
        padding: 20,
        borderRadius: 15
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
        width: '50%',
        padding: 10,
    }
})