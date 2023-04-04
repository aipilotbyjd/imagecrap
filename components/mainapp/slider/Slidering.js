import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import data from "./data";

const Slidering = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itembanner}>
        <View style={styles.imagebanner}>
          <Image
            source={{ uri: item.illustration }}
            style={styles.illustration}
          />
        </View>
        <View style={styles.textbanner}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
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
        layout={"tinder"}
        // // loop
        // autoplay
        // autoplayDelay={2000}
        // autoplayInterval={3000}
      />
    </View>
  );
};

export default Slidering;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itembanner: {
    flexDirection: "row",
    width: 300,
    height: 200,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  imagebanner: {
    width: 300,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  illustration: {
    width: 300,
    height: 150,
    resizeMode: "cover",
  },
  textbanner: {
    width: 300,
    height: 50,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
});
