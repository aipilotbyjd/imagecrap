import React from "react";
import { TextInput, View, Image, Text } from "react-native";

import styles from "./promptinput.style";

import { COLORS, icons, SIZES } from "../../../constants";

const Promptinput = () => {
  return (
    <View style={styles.container}>
      {/* //i want to add a two text like clicable text */}
      <View style={styles.textcontainer}>
        <Text style={styles.text}>Add Your Photo</Text>
        <Text style={styles.text}>I Need Inspiration</Text>
      </View>
      {/* i want single text area to this */}
      <View style={styles.textareacontainer}>
        <View style={styles.textareatext}>
          <Text style={styles.text}>Enter a Prompt</Text>
        </View>
        <TextInput
          style={styles.textarea}
          placeholder="Anything you want enter in prompt"
        />
      
      </View>
    </View>
  );
};
export default Promptinput;
