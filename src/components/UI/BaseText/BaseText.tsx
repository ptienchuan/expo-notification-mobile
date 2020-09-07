import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { Text } from 'native-base';

type BaseTextProps = {
  children: string;
  style?: TextStyle;
};

const BaseText = ({ style, children }: BaseTextProps): JSX.Element => (
  <Text style={{ ...styles.container, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default BaseText;
