import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Slidering = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Slidering</Text>
    </View>
  );
};

export default Slidering;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "red",
  },
});
