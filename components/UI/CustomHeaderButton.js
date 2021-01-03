import React from 'react'
import { View, Text, StyleSheet, Platform} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {  HeaderButton } from 'react-navigation-header-buttons'
import colors from '../../constants/colors'

export const CustomHeaderButton = props => {
    return (
      <HeaderButton
        IconComponent={Ionicons}
        iconSize={23}
        color={ Platform.OS == 'android' ? 'white' : colors.primary }
        {...props}
      />
    );
}

const styles = StyleSheet.create({})