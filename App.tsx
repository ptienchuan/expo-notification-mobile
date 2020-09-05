import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import MainNavigator from "./src/navigators/MainNavigator";

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      })
        .then(() => {
          setIsReady(true);
        })
        .catch((err) => {
          console.log("Loading font occurs error: ", err);
        });
    }
  });

  return isReady ? (
    <SafeAreaView
      style={[
        styles.container,
        Platform.select({
          ios: styles.containerIOS,
          android: styles.containerAndroid,
        }),
      ]}
    >
      <MainNavigator />
    </SafeAreaView>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerIOS: {
    backgroundColor: "gray",
    paddingTop: 0,
  },
  containerAndroid: {
    backgroundColor: "white",
    paddingTop: 25,
  },
});

export default App;
