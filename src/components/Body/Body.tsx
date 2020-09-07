import React from 'react';
import { View, ScrollView, StyleSheet, ViewStyle } from 'react-native';

type BodyProps = {
  children?: React.ReactNode;
  style?: ViewStyle;
  scrollViewStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
};

const Body = (props: BodyProps): JSX.Element => (
  <View style={{ ...styles.container, ...props.style }}>
    <ScrollView
      style={props.scrollViewStyle}
      contentContainerStyle={props.contentContainerStyle}
    >
      {props.children}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Body;
