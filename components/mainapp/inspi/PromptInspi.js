import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const theme = {
  colors: {
    primary: "#000",
    secondary: "#f0f0f0",
  },
  sizes: {
    h2: 24,
  },
};

const PromptInspirations = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Prompt Inspirations</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.column}>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://picsum.photos/id/237/200/300" }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Prompt 1</Text>
              <Text style={styles.cardSubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={styles.cardButton}>
              <TouchableOpacity>
                <Text style={styles.cardButtonText}>Try</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              source={{ uri: "https://picsum.photos/id/238/200/300" }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Prompt 1</Text>
              <Text style={styles.cardSubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={styles.cardButton}>
              <TouchableOpacity>
                <Text style={styles.cardButtonText}>Try</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://picsum.photos/id/239/200/300" }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Prompt 1</Text>
              <Text style={styles.cardSubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={styles.cardButton}>
              <TouchableOpacity>
                <Text style={styles.cardButtonText}>Try</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://picsum.photos/id/240/200/300" }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Prompt 1</Text>
              <Text style={styles.cardSubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={styles.cardButton}>
              <TouchableOpacity>
                <Text style={styles.cardButtonText}>Try</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    paddingTop: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: theme.sizes.h2,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  column: {
    width: "48%",
    marginBottom: 20,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 10,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cardPrompt: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 10,
  },
  cardButton: {
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  cardButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  cardSubtitle: {
    fontSize: 14,
    color: theme.colors.secondary,
  },
});

export default PromptInspirations;
