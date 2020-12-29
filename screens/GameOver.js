import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { BodyText } from "../components/BodyText";
import { MainButton } from "../components/MainButton";
import { TitleText } from "../components/TitleText";
import colors from "../constants/colors";
// you can use local and network images
export const GameOver = (props) => {
  const [availableDevHeight, setavailableDevHeight] = useState(Dimensions.get("window").height);

  useEffect(() => {
    const updateLayout = () => {
      setavailableDevHeight(Dimensions.get("window").height);
    };
      Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const combineStyles = StyleSheet.flatten([styles.imageContiner, {
    marginVertical: Dimensions.get("window").height / 100,
    width: Dimensions.get("window").height * 0.35,
    height: Dimensions.get("window").height * 0.35,
    borderRadius: (Dimensions.get("window").height * 0.35) / 2,
  }]);   
  
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText> I Guessed Correctly ! </TitleText>
        <View style={combineStyles}>
          <Image
            //fadeDuration={300}
            resizeMode={"stretch"}
            style={styles.image}
            source={require("../assets/success.png")}
            //source={{uri: 'https://cdn2.vectorstock.com/i/thumb-large/37/56/you-win-comic-speech-bubble-cartoon-game-assets-vector-9673756.jpg'}}
          />
        </View>
        <View style={styles.resultContianer}>
          <BodyText style={styles.resultText}>
            {" "}
            It took me <Text style={styles.highlight}> {props.numOfRounds}</Text> rounds to find your Number is :{" "}
            <Text style={styles.highlight}>{props.userChoice}</Text>{" "}
          </BodyText>

          <MainButton title="Play Again?" onPress={props.onNewGame} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Dimensions.get("window").width / 30,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContinerSmall: {
    marginVertical: Dimensions.get("window").height / 100,
    width: Dimensions.get("window").height * 0.35,
    height: Dimensions.get("window").height * 0.35,
    borderRadius: (Dimensions.get("window").height * 0.35) / 2,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden", // this allows the image not to overflow
  },
  imageContiner: {
    marginVertical: Dimensions.get("window").width / 30,
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden", // this allows the image not to overflow
  },
  highlight: {
    color: colors.accent,
    fontFamily: "open-sans-bold",
  },
  resultContianer: {
    marginHorizontal: 30,
    textAlign: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  resultText: {
    fontSize: Dimensions.get("window").height < 600 ? 14 : 20,
    color: "black",
    textAlign: "center",
    paddingVertical: 10,
  },
});
