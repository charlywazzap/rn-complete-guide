import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}} >
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 6,
        backgroundColor: 'white',
        shadowOpacity: 0.3,
        elevation: 10,
        padding: 20,
        borderRadius: 15
    },
})