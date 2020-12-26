import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
        />
        <Button title="Add" />
      </View>
      <View></View>
      <StatusBar style="auto" />
    </View>
  );
}

//https://reactnative.dev/docs/flexbox
const styles = StyleSheet.create({
  viewInput: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center"
  },
  textInput: {
    flex: 1,
    borderColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 5,
    
  }, 
  container: {
    padding: 30
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
