import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components/Header';
import { GameScreen } from './screens/GameScreen';
import { StartGameScreen } from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }
  let content = <StartGameScreen onStartGame={startGameHandler}/>
  if (userNumber) {
    content = <GameScreen  userChoice={userNumber}/>
  }
  return (
    <View style={styles.container}>
      <Header title="Guess My Number" />
      {content}
      
      <StatusBar style="auto" /> 
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
