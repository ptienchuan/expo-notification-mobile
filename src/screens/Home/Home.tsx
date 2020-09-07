import React from 'react';
import { Text } from 'react-native';
import Body from '../../components/Body/Body';
import styles from './styles';

const HomeScreen = (): JSX.Element => {
  return (
    <Body contentContainerStyle={styles.container}>
      <Text style={{ ...styles.text, ...styles.title }}>HOME SCREEN</Text>
      <Text style={styles.text}>Demo React Native Expo Notification</Text>
    </Body>
  );
};

export default HomeScreen;
