import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { COLORS, SIZES } from "../../../constants";
import data from "./data";

const { width: screenWidth } = Dimensions.get("window");

const Slider = () => {
  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <ParallaxImage
            source={{ uri: item.illustration }}
            containerStyle={styles.image}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Try Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={"tinder"}
        // loop
        // autoplay
        // autoplayDelay={2000}
        // autoplayInterval={3000}
        hasParallaxImages={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    flex: 1,
    height: 140,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: COLORS.lightGray,
  },
  imageContainer: {
    width: screenWidth / 2,
    height: "100%",
    backgroundColor: COLORS.white,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth / 2,
    height: "100%",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 10,
    color: COLORS.gray,
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.black,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 10,
    color: COLORS.white,
    fontWeight: "bold",
  },
});

export default Slider;
