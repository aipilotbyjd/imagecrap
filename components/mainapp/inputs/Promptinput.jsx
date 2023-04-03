import React, { useEffect } from "react";
import { TextInput, View, Image, Text } from "react-native";

import styles from "./promptinput.style";

import { COLORS, icons, SIZES } from "../../../constants";

const Promptinput = () => {
  const [prompt, setPrompt] = React.useState("");
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
          <Text id="textprompt" style={styles.textprompt}>
            Enter a Prompt
          </Text>
        </View>
        <TextInput
          id="prompt"
          style={styles.textarea}
          value={prompt}
          onChangeText={(text) => setPrompt(text)}
          placeholder="Anything you want enter in prompt"
        />
        <View style={styles.textareaicons}>
          <Image source={icons.history} style={styles.historyicon} />
          <Image source={icons.cross} style={styles.crossicon} />
        </View>
      </View>
    </View>
  );
};
export default Promptinput;
