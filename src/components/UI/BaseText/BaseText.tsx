import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "native-base";

type BaseTextProps = {
  children: string;
  style?: { [key: string]: any };
};

const BaseText = ({ style, children }: BaseTextProps) => (
  <Text style={{ ...styles.container, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
  },
});

export default BaseText;
