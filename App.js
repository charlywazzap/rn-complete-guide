import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components/Header';
import { GameOver } from './screens/GameOver';
import { GameScreen } from './screens/GameScreen';
import { StartGameScreen } from './screens/StartGameScreen';
import AppLoading from 'expo-app-loading';
import * as Fonts from 'expo-font';


// const fetchFonts = () => {
//   return Fonts.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// }

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [gameWon, setGameWon] = useState(false)
  const [rounds, setRounds] = useState(0)
  const [loaded, setLoaded ] = useState(false)
  let [fontsLoaded] = Fonts.useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded){
    // startAsync needs promise <AppLoading startAsync={fetchFonts} onFinish={() => {setLoaded(true)}} onError={ () => {console.log('error')}}/>
    return <AppLoading />
  }
  
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setRounds(0)
  }

  const wonGameHandler = (rounds) => {
    setGameWon(true)
    setRounds(rounds)
  }

  
  const newGameHandler = () => {
    setRounds(0)
    setUserNumber(null)
    setGameWon(false)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if (userNumber) {
    content = <GameScreen  userChoice={userNumber} onGameWon={wonGameHandler}/>
  }

  if (gameWon) {
    content = <GameOver userChoice={userNumber} numOfRounds={rounds} onNewGame={newGameHandler}/>
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
