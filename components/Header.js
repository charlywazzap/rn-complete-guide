import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors';

export const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        padding: 36,
        backgroundColor : Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'open-sans-bold',
        color: 'white'
    }
})
