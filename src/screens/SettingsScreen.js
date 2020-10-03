import React, {useContext} from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import AppContext from '../context/AppContext';

const SettingsScreen = () => {

  const context = useContext(AppContext);
  const {consumption, setConsumption} = context.consumption;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.info}>Carburant Consumption:</Text>
      <TextInput
        style={styles.input}
        placeholder="Consumption (l/km)"
        keyboardType="numeric"
        onChangeText={setConsumption}
        // onEndEditing={setConsumption}
        value={consumption.toString()}
      />
      <Text style={styles.legend}>Litres of gas consumed every 100km</Text>
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
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    fontSize: 18,
  },
  legend: {
    fontSize: 10,
    alignSelf: "center"
  }
});

export default SettingsScreen;
