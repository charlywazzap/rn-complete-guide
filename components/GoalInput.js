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
                <View style={styles.buttonView}>
                    <View style={styles.button}><Button title="Add" onPress={ addGoalHandler }/></View>
                    <View style={styles.button}><Button title="Cancel" color="red" onPress={ addCancelHandler }/></View>
                    {/* <Button title="Add" onPress={ () => props.onAddGoal(goalText) }/> */}
                </View>
  
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '50%'
    },
    buttonView : {
        width:'80%',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    viewInput: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        margin: 30,
    },
    textInput: {
        width:'100%',
        borderColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 5,
      
    }
  });
  