import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

import DistanceInput from '../components/DistanceInput';
import Results from '../components/Results';

import usePrice from '../hooks/usePrice';

const HomeScreen = () => {

  const price = usePrice();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Trip Price</Text>
      <Text style={styles.info}>Enter trip distance (km):</Text>
      <DistanceInput />
      <Results price={price} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 14
  },
  title: {
    fontSize: 25,
    marginBottom: 30
  },
  info: {
    fontSize: 19,
  }
});

export default HomeScreen;
