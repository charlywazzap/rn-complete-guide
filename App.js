import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [ courseGoals, setcourseGoals ] = useState([])
  const [ isAddMode , setisAddMode ] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setcourseGoals(courseGoals => [...courseGoals,{ id: Math.random().toString(), myValue: goalTitle } ])
    setisAddMode(false)
  }

  const removeGoalHandler = goalId => {
    setcourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id != goalId )
    })
  }

  const showModal = () => {
    setisAddMode(true)
  }

  const hideModal = () => {
    setisAddMode(false)
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={ showModal }  />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler}  onCancel={ hideModal }/>
      <FlatList
        keyExtractor={ (item, idx) => item.id }
        data={ courseGoals }
        renderItem={ itemData => (
          <GoalItem 
            id={ itemData.item.id }
            title={itemData.item.myValue} 
            onDelete={ removeGoalHandler }
            // onDelete={ removeGoalHandler.bind(this,itemData.item.id) }
          />
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
