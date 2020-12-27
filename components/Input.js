import React from 'react'
import { View, TextInput, StyleSheet} from 'react-native'
import Color from "../constants/colors";

export const Input = props => {
    return (
        <TextInput { ...props } style={{ ...styles.input, ...props.style }}/>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: Color.accent,
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})