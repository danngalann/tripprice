import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Results = ({ price, due }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Current price</Text>
      <Text style={styles.price}>{price}€/l</Text>
      <Text style={styles.header}>Due</Text>
      <Text style={styles.price}>{due.toFixed(2)}€</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 32,
  },
  price: {
    fontSize: 28,
    color: "green",
    marginBottom: 20,
  },
});

export default Results;
