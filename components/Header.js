import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
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
        height: Dimensions.get('window').height * .12,
        padding: Dimensions.get('window').height / 60,
        backgroundColor : Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'black',
        fontSize: Dimensions.get('window').height < 600 ? 14 : 20,
        fontFamily: 'open-sans-bold',
        color: 'white'
    }
})
