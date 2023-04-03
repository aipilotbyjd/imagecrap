import React, { useEffect } from "react";
import {
  TextInput,
  View,
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";

import styles from "./promptinput.style";

import { COLORS, icons, SIZES, FONT } from "../../../constants";

const Promptinput = () => {
  const [prompt, setPrompt] = React.useState("");

  useEffect(() => {
    if (prompt.length > 500) {
      ToastAndroid.show(
        "You can't write more than 500 characters",
        ToastAndroid.TOP
      );
    }
  }, [prompt]);

  const DeletePrompt = () => {
    ToastAndroid.show("Prompt Deleted", ToastAndroid.SHORT);
    setPrompt("");
  };

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
          {prompt === "" && (
            <Text id="textprompt" style={styles.textprompt}>
              Enter a Prompt
            </Text>
          )}
        </View>

        <TextInput
          id="prompt"
          style={
            prompt === ""
              ? styles.textarea
              : {
                  width: "100%",
                  height:
                    prompt.length > 100 ? 140 : prompt.length > 70 ? 70 : 70,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  fontSize: 16,
                  color: COLORS.gray,
                  fontFamily: FONT.regular,
                }
          }
          multiline={true}
          numberOfLines={5}
          value={prompt}
          onChangeText={(text) => setPrompt(text)}
          placeholder="Anything you want enter in prompt"
        />
        <View style={styles.textareaicons}>
          <Image source={icons.history} style={styles.historyicon} />
          {/* WRITE TEXT PROMPT LENGHT */}
          {prompt.length > 0 && prompt.length < 500 && (
            <Text style={styles.textarealength}>
              characters : {prompt.length}
            </Text>
          )}
          {/* if prompt lenght is greater than 500 then show tost */}
          {prompt.length > 500 && (
            <Text style={styles.textarealength2}>
              characters : {prompt.length}
            </Text>
          )}
          <TouchableOpacity onPress={DeletePrompt}>
            <Image source={icons.cross} style={styles.crossicon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Promptinput;
