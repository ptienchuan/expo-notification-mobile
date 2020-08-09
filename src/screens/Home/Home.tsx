import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, ...styles.title }}>HOME SCREEN</Text>
      <Text style={styles.text}>Demo React Native Expo Notification</Text>
    </View>
  );
};

export default HomeScreen;
