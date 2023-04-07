import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { PromptInspi, Promptinput, Slidering } from "../components";

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
        <View>
          <PromptInspi />
        </View>
        <View style={{ height: 15 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
