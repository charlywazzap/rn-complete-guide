import React, { isValidElement, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import Colors from "../constants/colors";
import { NumberContainer } from "../components/NumberContainer";
import { TitleText } from "../components/TitleText";
import { BodyText } from "../components/BodyText";
import { MainButton } from "../components/MainButton";

export const StartGameScreen = (props) => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  

  const inputHandler = (inputValue) => {
    setValue(inputValue.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => setValue("");

  const confirmInputHander = () => {
    const userNumber = parseInt(value);
    if (isValidNum(userNumber)) {
      showInvalidAlert("Not a number");
      return;
    }
    if (!isLowRangeValid(userNumber)) {
      showInvalidAlert("Number needs to be higer than 0 ");
      return;
    }
    if (!isHiRangeValid(userNumber)) {
      showInvalidAlert("Number needs to be lower than 99");
      return;
    }
    setConfirmed(true);
    setValue("");
    setSelectedValue(userNumber);
    Keyboard.dismiss();
  };

  const showInvalidAlert = (text) =>
    Alert.alert("invalid Number", text, [{ text: "Ok", style: "destructive", onPress: resetInputHandler }]);
  const isValidNum = (num) => isNaN(num);
  const isLowRangeValid = (num) => num >= 0;
  const isHiRangeValid = (num) => num <= 99;

  let confirmedOutput = confirmed ? (
    <Card style={styles.summary}>
      <TitleText>You Selected</TitleText>
      <NumberContainer>{selectedValue}</NumberContainer>
      <MainButton title="Start Game" onPress={props.onStartGame.bind(this, selectedValue)} />
    </Card>
  ) : null;

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={"padding"}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <TitleText style={styles.title}>Start a New Game!</TitleText>
            <Card style={styles.inputContainer}>
              <BodyText>Select a number</BodyText>
              <Input
                style={styles.input}
                textAlign={"center"}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                value={value}
                onChangeText={inputHandler}
              />
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button title="Confirm" color={Colors.accent} onPress={confirmInputHander} />
                </View>
                <View style={styles.button}>
                  <Button title="Reset" color={Colors.primary} onPress={resetInputHandler} />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  summary: {
    marginVertical: 20,
    alignItems: "center",
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: "50%",
    minWidth: 300,
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  input: {
    width: 50,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  button: {
    width: Dimensions.get('window').width / 4,
    padding: 10,
  },
});
