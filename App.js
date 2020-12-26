import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [ goalText, setGoal ] = useState('')
  const [ courseGoals, setcourseGoals ] = useState([])

  const goalInputHandler = (text) =>  {
    setGoal(text)
  }

  const addGoalHandler = () => {
    setcourseGoals(courseGoals => [...courseGoals,{ id: Math.random().toString(), myValue: goalText } ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <Button title="Add" onPress={ addGoalHandler }/>
      </View>
      <FlatList
        keyExtractor={ (item, idx) => item.id }
        data={ courseGoals }
        renderItem={ itemData => (
        <View style={styles.listItem} ><Text >{itemData.item.myValue}</Text></View> 
        )}
      />
        
      <StatusBar style="auto" />
    </View>
  );
}

//https://reactnative.dev/docs/flexbox
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginBottom:10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
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
  },
});
