import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MenunItem = ({ item, navigate }) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigate(item.name)}
    >
      {/* <Ionicons name={item.icon} size={32} /> */}
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 60,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
  },
});

export default MenunItem;
