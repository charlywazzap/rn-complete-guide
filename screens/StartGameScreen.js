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
                    <Button title="Confirm"  onPress={() => {}} />
                    <Button title="Reset" color="red" onPress={() => {}} />
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
        maxWidth: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: "row",
        flex:1,

        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 15
    },
})