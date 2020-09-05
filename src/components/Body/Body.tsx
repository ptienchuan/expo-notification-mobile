import React from "react";
import { View, StyleSheet } from "react-native";

type BodyProps = {
  children: any;
  style?: { [key: string]: any };
};

const Body = ({ children, style }: BodyProps) => (
  <View style={{ ...styles.container, ...style }}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});

export default Body;
