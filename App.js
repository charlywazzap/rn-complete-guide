import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';



export default function App() {
  let [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  return (
    <SafeAreaView style={styles.container}>
      <Text>Meal app</Text>
    </SafeAreaView>
  );
}

//https://reactnative.dev/docs/flexbox
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
});
