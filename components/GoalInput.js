import React, { useState } from 'react';
import { 
    View, 
    TextInput, 
    StyleSheet, 
    Button, 
    Modal
} from "react-native";


export const GoalInput = props => {
    const [ goalText, setGoal ] = useState('')
    const goalInputHandler = (text) =>  {
        setGoal(text)
      }
    
    const addGoalHandler = () => {
        props.onAddGoal(goalText)
        setGoal('')
    }

    const addCancelHandler = () => {
        setGoal('')
        props.onCancel()
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.viewInput}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Course Goal"
                  onChangeText={goalInputHandler}
                  value={goalText}
                />
                <Button title="Add" onPress={ addGoalHandler }/>
                <Button title="Cancel" color="red" onPress={ addCancelHandler }/>
                {/* <Button title="Add" onPress={ () => props.onAddGoal(goalText) }/> */}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    viewInput: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        margin: 30,
    },
    textInput: {
        width:'80%',
        borderColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 5,
      
    }
  });
  