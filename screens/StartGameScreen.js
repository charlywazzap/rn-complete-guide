import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Card } from '../components/Card'
import Colors from '../constants/colors';

export const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Confirm"  color={Colors.accent } onPress={() => {}} /></View>
                    <View style={styles.button}><Button title="Reset" color={Colors.primary} onPress={() => {}} /></View>
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
        width: 350,
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignContent: "center",
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