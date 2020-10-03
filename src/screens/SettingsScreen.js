import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.info}>Carburant Consumption:</Text>
      <TextInput
        style={styles.input}
        placeholder="Consumption (l/km)"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 14,
    marginTop: 30,
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
  info: {
    fontSize: 19,
  },
  input: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 25,
    marginTop: 30,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    fontSize: 18,
  },
});

export default SettingsScreen;
