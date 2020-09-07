import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { Text } from 'native-base';

type HeadingProps = {
  children: string;
  style?: TextStyle;
};

const Heading = ({ style, children }: HeadingProps): JSX.Element => (
  <Text style={{ ...styles.container, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  container: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
    color: '#3A69E5',
  },
});

export default Heading;
