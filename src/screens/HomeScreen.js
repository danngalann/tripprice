import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import DistanceInput from "../components/DistanceInput";
import Results from "../components/Results";

import usePrice from "../hooks/usePrice";

const HomeScreen = () => {

  const [due, setDue] = useState(0);
  const [distance, setDistance] = useState(0);
  const price = usePrice();

  const getDue = () => {
    console.log(distance);
    // L of gas per KM traveled
    const consumption = 1;
    const litresConsumed = distance * consumption;

    setDue(litresConsumed * price);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Trip Price</Text>
      <Text style={styles.info}>Enter trip distance (km):</Text>
      <DistanceInput setDistance={setDistance} getDue={getDue} />
      <Results price={price} due={due} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 14,
    marginTop: 30
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
  info: {
    fontSize: 19,
  },
});

export default HomeScreen;
