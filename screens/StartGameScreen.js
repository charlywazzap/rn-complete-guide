import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Card } from '../components/Card'

export const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Confirm"  onPress={() => {}} /></View>
                    <View style={styles.button}><Button title="Reset" color="red" onPress={() => {}} /></View>
                </View>
            </Card>
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