import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, ...styles.title }}>
        NOTIFICATION SCREEN
      </Text>
      <Text style={styles.text}>Demo React Native Expo Notification</Text>
    </View>
  );
};

export default NotificationScreen;
