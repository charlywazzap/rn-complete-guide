import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [ courseGoals, setcourseGoals ] = useState([])

  const addGoalHandler = (goalTitle) => {
    setcourseGoals(courseGoals => [...courseGoals,{ id: Math.random().toString(), myValue: goalTitle } ])
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={ (item, idx) => item.id }
        data={ courseGoals }
        renderItem={ itemData => (
          <GoalItem title={itemData.item.myValue} />
        )}
      />
        
      <StatusBar style="auto" />
    </View>
  );
}

//https://reactnative.dev/docs/flexbox
const styles = StyleSheet.create({

  container: {
    padding: 30
  },
});
