import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert, ScrollView } from "react-native";
import { NumberContainer } from "../components/NumberContainer";
import { Card } from "../components/Card";
import Colors from "../constants/colors";
import { TitleText } from "../components/TitleText";
import { Ionicons } from "@expo/vector-icons"; // lots of icons!! :D https://icons.expo.fyi/
import { MainButton } from "../components/MainButton";

//useRef allows you to define a var that will survive component renders

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  return randNum === exclude ? generateRandomBetween(min, max, exclude) : randNum;
};

export const GameScreen = (props) => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const rounds = useRef(0);
  const initGuess = useRef(generateRandomBetween(currentLow.current, currentHigh.current, props.userChoice))
  const [currentGuess, setCurrentGuess] = useState(initGuess.current);
  const [pastGuesses, setPassGueses] = useState([initGuess.current])
  // runs after render
  const { userChoice, onGameWon } = props;
  useEffect(() => {
    if (isGuessCorrect(currentGuess)) {
      onGameWon(rounds.current);
    }
  }, [currentGuess]);

  const nextGuessHandler = (direction) => {
    if (isGreaterHintTrue(direction)) {
      showInvalidAlert(" You know this is wrong..., the number should be lower");
      return;
    }
    if (isLowerHintTrue(direction)) {
      showInvalidAlert(" You know this is wrong..., the number should be higher");
      return;
    }
    direction === "lower"
      ? (currentHigh.current = currentGuess)
      : (currentLow.current = currentGuess + 1);
    const nextNum = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNum);
    rounds.current++;
    setPassGueses(listOfGueses => [nextNum,...listOfGueses] )
  };

  const showInvalidAlert = (text) =>
    Alert.alert("Sneaky User...,", text, [{ text: "Sorry", style: "cancel" }]);
  const isGreaterHintTrue = (hint) => hint === "lower" && currentGuess < userChoice;
  const isLowerHintTrue = (hint) => hint === "greater" && currentGuess > userChoice;
  const isGuessCorrect = (guess) => guess === userChoice;

  return (
    <View style={styles.screen}>
      <TitleText>Computer's Guess </TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <MainButton onPress={nextGuessHandler.bind(this, "lower")} color={Colors.accent}>
            <Ionicons name={"md-remove"} size={24} color={"white"} />
          </MainButton>
        </View>
        <View style={styles.button}>
          <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name={"md-add"} size={24} color={"white"} />
          </MainButton>
        </View>
      </Card>
      <ScrollView>
        {pastGuesses.map((guess,idx) => (
          <View key={idx}>
            <Text>{guess}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    width: 350,
    maxWidth: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    width: "55%",
    padding: 10,
  },
});
