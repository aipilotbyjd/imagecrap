import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import data from "./data";
import { SIZES, COLORS } from "../../../constants";

const Slidering = () => {
  const renderItem = ({ item, index }, parallaxProps) => {
    const image = (
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />
    );

    const text = (
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Try Now</Text>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={styles.item}>
        {image}
        {text}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={330}
        itemWidth={200}
        layout={"default"}
        loop
        // autoplay
        // autoplayDelay={2000}
        // autoplayInterval={3000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 150,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    padding: 20,
    backgroundColor: COLORS.gray2,
  },
  imageContainer: {
    flex: 1,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    width: 180,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Slidering;
