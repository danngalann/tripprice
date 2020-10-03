import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Linking from 'expo-linking';

import MenuItem from "./MenuItem";

const Sidebar = ({ navigation }) => {

  const openLink = () => {
    Linking.openURL("https://www.linkedin.com/in/daniel-galan-navio/");
  }

  return (
    <View style={styles.footer}>
      <Text style={{color: "black"}}>Made with ❤️ by</Text>
      <Text onPress={openLink} style={styles.link}>danngalann</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "flex-end",
    marginRight: 20,
    marginBottom: 10
  },
  list: {
    width: "100%",
    marginTop: 40,
    marginLeft: 15,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "blue"
  }
});

export default Sidebar;
