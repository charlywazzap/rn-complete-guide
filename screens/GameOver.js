import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { BodyText } from "../components/BodyText";
import { TitleText } from "../components/TitleText";
import colors from "../constants/colors";
// you can use local and network images
export const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText> I Guessed Correctly ! </TitleText>
      <View style={styles.imageContiner}>
        <Image
          //fadeDuration={300}
          resizeMode={"stretch"}
          style={styles.image}
          source={require("../assets/success.png")}
          //source={{uri: 'https://cdn2.vectorstock.com/i/thumb-large/37/56/you-win-comic-speech-bubble-cartoon-game-assets-vector-9673756.jpg'}}
        />
      </View>
      <View style={styles.resultContianer}>
        <BodyText style={styles.resultText}> It took me <Text style={styles.highlight}> {props.numOfRounds}</Text>  rounds  Your Number is : <Text style={styles.highlight}>{props.userChoice}</Text> </BodyText>
        
        <Button title="Play Again?" onPress={props.onNewGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContiner: {
    marginVertical: 30,
    width: "80%",
    height: 300,
    borderRadius: 500,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden", // this allows the image not to overflow
  },
  highlight:{
      color: colors.accent,
      fontFamily: 'open-sans-bold'
  },
  resultContianer:{
      marginHorizontal: 30,
      textAlign: "center",
      alignItems: "center",
      paddingVertical: 10,
  },
  resultText :{
      fontSize: 20,
      color: 'black',
      textAlign: "center",
      paddingVertical: 10,

  }
});
