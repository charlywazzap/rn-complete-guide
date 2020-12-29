import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';




export default function App() {

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
