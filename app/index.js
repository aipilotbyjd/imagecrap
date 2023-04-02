import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
  Slider,
  SafeAreaView,
  Dimensions,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [sliderValue, setSliderValue] = useState(1);
  const backgroundGradientColors = ["#2B32B2", "#1488CC"];
  const buttonGradientColors = ["#FF4E50", "#F9D423"];
  const promptContainerGradientColors = ["#00C9FF", "#92FE9D"];

  const handleGenerateImage = () => {
    // Add code to generate image here
  };

  const handleUploadPhoto = () => {
    // Add code to show photo upload popup here
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleUploadPhoto}
        >
          <Text style={styles.actionButtonText}>Add Your Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>I need inspiration</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.promptContainer}>
        <LinearGradient
          colors={promptContainerGradientColors}
          style={styles.promptGradient}
        >
          <TextInput
            style={styles.promptInput}
            placeholder="Enter a prompt"
            value={prompt}
            onChangeText={setPrompt}
            multiline={true}
            numberOfLines={3}
          />
        </LinearGradient>
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Number of Images</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={sliderValue}
          onValueChange={handleSliderChange}
        />
        <Text style={styles.sliderValue}>{sliderValue}</Text>
      </View>
      <TouchableOpacity
        style={styles.generateButton}
        onPress={handleGenerateImage}
      >
        <Text style={styles.generateButtonText}>GENERATE IMAGES</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {/* Add generated image here */}
        {/* <Image source={require("./placeholder-image.png")} style={styles.image} /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#9400D3",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  headerButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: 100,
  },
  actionContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionButton: {
    width: 150,
    alignItems: "center",
  },
  actionButtonText: {
    color: "#9400D3",
    fontWeight: "bold",
    fontSize: 16,
  },
  selectContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  selectLabel: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  sliderContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  sliderLabel: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  generateButton: {
    backgroundColor: "#9400D3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginVertical: 30,
  },
  generateButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  button: {
    borderRadius: 5,
    overflow: "hidden",
  },
  buttonGradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  promptContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
    overflow: "hidden",
  },
  promptGradient: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  promptInput: {
    height: 100,
    textAlignVertical: "top",
    color: "#fff",
  },
});
