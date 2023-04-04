import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Promptinput, Slidering } from "../components";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: "#fff" }}
      >
        <View>
          <Promptinput />
        </View>
        <View>
          <Slidering />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
