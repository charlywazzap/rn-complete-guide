import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components/Header';
import { StartGameScreen } from './screens/StartGameScreen';

export default function App() {

  return (
    <View style={styles.container}>
      <Header title="Guess My Number" />
      <StartGameScreen/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

//https://reactnative.dev/docs/flexbox
const styles = StyleSheet.create({

  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
