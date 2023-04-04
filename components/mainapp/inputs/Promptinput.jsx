import React, { useEffect } from "react";
import {
  TextInput,
  View,
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./promptinput.style";

import { COLORS, icons, SIZES, FONT } from "../../../constants";
import SliderCat from "./SliderCat";

const Promptinput = () => {
  const [prompt, setPrompt] = React.useState("");
  const [isClicked, setIsClicked] = React.useState(false);

  useEffect(() => {
    if (prompt.length > 500) {
      ToastAndroid.show(
        "You can't write more than 500 characters",
        ToastAndroid.TOP
      );
    }
  }, [prompt]);

  const DeletePrompt = () => {
    ToastAndroid.show("Prompt Deleted", 1000);
    setPrompt("");
  };

  const createImage = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 5000);
  };

  const InspirationPrompts = [
    "Write about a time you felt like you were on top of the world.",
    "Remember a time you felt like you were on top of the world.",
    "you felt like you were on top of the world.",
    "gyou felt like you were on top of the world.",
    "jyou felt like you were on top of the world.",
    "ko you felt like you were on top of the world.",
  ];

  const AddInsPrompts = () => {
    const randomInspiration = InspirationPrompts[Math.floor(Math.random() * 5)];
    setPrompt(randomInspiration);
  };

  return (
    <View style={styles.container}>
      {/* //i want to add a two text like clicable text */}
      <View style={styles.textcontainer}>
        <Text style={styles.text}>Add Your Photo</Text>
        <TouchableOpacity onPress={AddInsPrompts}>
          <Text style={styles.text}>I Need Inspiration</Text>
        </TouchableOpacity>
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
                    prompt.length > 100
                      ? 140
                      : prompt.length > 60
                      ? 80
                      : prompt.length > 80
                      ? 120
                      : 80,
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
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show("History", ToastAndroid.SHORT);
            }}
          >
            <Image source={icons.history} style={styles.historyicon} />
          </TouchableOpacity>
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
      <View style={styles.slidercontainer}>
        <SliderCat />
      </View>
      <View style={styles.submitbutton}>
        <TouchableOpacity
          onPress={() => {
            createImage();
          }}
          style={styles.submitbuttonbase}
        >
          <Image source={icons.video} style={styles.submitbuttonicon} />
          {isClicked ? (
            <Image
              source={icons.loder}
              color={COLORS.primary}
              style={styles.submitbuttonloder}
            />
          ) : (
            <View style={styles.submitbuttontexts}>
              <Text style={styles.submitbuttontext}>Create</Text>
              <Text style={styles.submitbuttontext2}>Watch an Ad</Text>
            </View>
          )}
          <FontAwesome
            style={styles.submitbuttonicon}
            name="arrow-circle-o-right"
            size={25}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Promptinput;
