import React, { useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import * as Linking from 'expo-linking';

import MenuItem from "./MenuItem";
import Footer from "./Footer";

const Sidebar = ({ navigation }) => {
  const [screens, setScreens] = useState([{ name: "Home" }]);

  const openLink = () => {
    Linking.openURL("https://www.linkedin.com/in/daniel-galan-navio/");
  }

  return (
    <>
      <FlatList
        style={styles.list}
        data={screens}
        renderItem={({ item }) => (
          <MenuItem item={item} navigate={navigation.navigate} />
        )}
        keyExtractor={(item) => item.name}
      />
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
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
