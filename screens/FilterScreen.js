import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { CustomHeaderButton } from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

export const FilterScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Filter Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1 ,
    justifyContent: "center",
    alignItems: "center"
  }
});


FilterScreen.navigationOptions = (navData) => {
  console.log(navData)
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName={"ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};