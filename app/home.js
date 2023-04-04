import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Promptinput, Slidering } from "../components";

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Promptinput />
      </View>
      <View>
        <Slidering />
      </View>
    </SafeAreaView>
  );
};

export default Home;
