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
            style={[styles.stylesingle]}
            onPress={() => handleSelectItem("item1")}
          >
            <View style={selectedItem === "item1" && styles.selected}>
              <View style={styles.iconcontainer}>
                <Image source={icons.share} style={styles.icon} />
              </View>
            </View>
            <View style={styles.textstyleok}>
              <Text style={styles.text}>Novalistic</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.stylesingle}
            onPress={() => handleSelectItem("item2")}
          >
            <View style={selectedItem === "item2" && styles.selected}>
              <View style={styles.iconcontainer}>
                <Image source={icons.share} style={styles.icon} />
              </View>
            </View>
            <View style={styles.textstyleok}>
              <Text style={styles.text}>Mythological</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.stylesingle}
            onPress={() => handleSelectItem("item3")}
          >
            <View style={selectedItem === "item3" && styles.selected}>
              <View style={styles.iconcontainer}>
                <Image source={icons.share} style={styles.icon} />
              </View>
            </View>
            <View style={styles.textstyleok}>
              <Text style={styles.text}>Abstract</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.stylesingle}
            onPress={() => handleSelectItem("item4")}
          >
            <View style={selectedItem === "item4" && styles.selected}>
              <View style={styles.iconcontainer}>
                <Image source={icons.share} style={styles.icon} />
              </View>
            </View>
            <View style={styles.textstyleok}>
              <Text style={styles.text}>Geometric</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.stylesingle}
            onPress={() => handleSelectItem("item5")}
          >
            <View style={selectedItem === "item5" && styles.selected}>
              <View style={styles.iconcontainer}>
                <Image source={icons.share} style={styles.icon} />
              </View>
            </View>
            <View style={styles.textstyleok}>
              <Text style={styles.text}>Novalistic</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.stylesingle}
            onPress={() => handleSelectItem("item6")}
          >
            <View style={selectedItem === "item6" && styles.selected}>
              <View style={styles.iconcontainer}>
                <Image source={icons.share} style={styles.icon} />
              </View>
            </View>
            <View style={styles.textstyleok}>
              <Text style={styles.text}>Mythological</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.stylesingle}
            onPress={() => handleSelectItem("item7")}
          >
            <View style={selectedItem === "item7" && styles.selected}>
              <View style={styles.iconcontainer}>
                <Image source={icons.share} style={styles.icon} />
              </View>
            </View>
            <View style={styles.textstyleok}>
              <Text style={styles.text}>Abstract</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.stylesingle}
            onPress={() => handleSelectItem("item8")}
          >
            <View style={selectedItem === "item8" && styles.selected}>
              <View style={styles.iconcontainer}>
                <Image source={icons.share} style={styles.icon} />
              </View>
            </View>
            <View style={styles.textstyleok}>
              <Text style={styles.text}>Geometric</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.stylesingle}
            onPress={() => handleSelectItem("item9")}
          >
            <View style={selectedItem === "item9" && styles.selected}>
              <View style={styles.iconcontainer}>
                <Image source={icons.share} style={styles.icon} />
              </View>
            </View>
            <View style={styles.textstyleok}>
              <Text style={styles.text}>Novalistic</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.stylesingle}
            onPress={() => handleSelectItem("item10")}
          >
            <View style={selectedItem === "item10" && styles.selected}>
              <View style={styles.iconcontainer}>
                <Image source={icons.share} style={styles.icon} />
              </View>
            </View>
            <View style={styles.textstyleok}>
              <Text style={styles.text}>Mythological</Text>
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
    fontSize: 10,
    fontFamily: FONT.medium,
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
  textstyleok: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default SliderCat;
