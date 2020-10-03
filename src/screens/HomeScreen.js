import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import DistanceInput from "../components/DistanceInput";
import Results from "../components/Results";

import AppContext from '../context/AppContext';

const HomeScreen = () => {

  const context = useContext(AppContext);

  // Unpack context
  const {distance, setDistance} = context.distance;
  const {due, setDue} = context.due;
  const {consumption} = context.consumption;
  const {price} = context.price;

  const getDue = () => {
    // L of gas per KM traveled
    const litresConsumed = distance * (Number(consumption) / 100);

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
