import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { FONT, icons } from "../../../constants";

const SliderCat = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.stylecontainer}>
        <Text style={styles.text1}>Select</Text>
        <Text style={styles.text2}>Style</Text>
        <Text style={styles.text3}>Optional</Text>
      </View>
      <View style={styles.stylecontainer2}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <TouchableOpacity
            style={[
              styles.stylesingle,
              selectedItem === "item1" && styles.selected,
            ]}
            onPress={() => handleSelectItem("item1")}
          >
            <View style={styles.iconcontainer}>
              <Image source={icons.share} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.stylesingle,
              selectedItem === "item2" && styles.selected,
            ]}
            onPress={() => handleSelectItem("item2")}
          >
            <View style={styles.iconcontainer}>
              <Image source={icons.share} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.stylesingle,
              selectedItem === "item3" && styles.selected,
            ]}
            onPress={() => handleSelectItem("item3")}
          >
            <View style={styles.iconcontainer}>
              <Image source={icons.share} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.stylesingle,
              selectedItem === "item4" && styles.selected,
            ]}
            onPress={() => handleSelectItem("item4")}
          >
            <View style={styles.iconcontainer}>
              <Image source={icons.share} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.stylesingle,
              selectedItem === "item5" && styles.selected,
            ]}
            onPress={() => handleSelectItem("item5")}
          >
            <View style={styles.iconcontainer}>
              <Image source={icons.share} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.stylesingle,
              selectedItem === "item6" && styles.selected,
            ]}
            onPress={() => handleSelectItem("item6")}
          >
            <View style={styles.iconcontainer}>
              <Image source={icons.share} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.stylesingle,
              selectedItem === "item7" && styles.selected,
            ]}
            onPress={() => handleSelectItem("item7")}
          >
            <View style={styles.iconcontainer}>
              <Image source={icons.share} style={styles.icon} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconcontainer: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  stylecontainer: {
    flexDirection: "row",
    alignContent: "flex-start",
  },
  stylecontainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  text1: {
    fontSize: 16,
    color: "#000",
    fontFamily: FONT.regular,
    paddingRight: 8,
  },
  text2: {
    fontSize: 16,
    color: "#000",
    fontFamily: FONT.bold,
    paddingRight: 8,
  },
  text3: {
    fontSize: 10,
    color: "#000",
    fontFamily: FONT.regular,
    paddingBottom: 4,
  },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  stylesingle: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  selected: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
  },
});

export default SliderCat;
