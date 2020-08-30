import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/MainNavigator';
import styles from './style';

type NotificationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Notifications'
>;
type NotificationProps = {
  navigation: NotificationScreenNavigationProp;
};

const NotificationScreen = ({ navigation }: NotificationProps) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, ...styles.title }}>
        NOTIFICATION SCREEN
      </Text>
      <Text style={styles.text}>Demo React Native Expo Notification</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default NotificationScreen;
