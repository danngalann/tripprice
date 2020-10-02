import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const DistanceInput = ({ setDistance, getDue }) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Distance (km)"
        keyboardType="numeric"
        onChangeText={setDistance}
        onEndEditing={getDue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 25,
    marginTop: 30,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
  },
  input: {
    fontSize: 18,
  },
});

export default DistanceInput;
