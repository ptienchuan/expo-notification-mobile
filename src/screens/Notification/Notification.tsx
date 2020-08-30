import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/MainNavigator';
import CommonFooter from '../../components/CommonFooter/CommonFooter';
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
    <CommonFooter navigation={navigation} from="Notification">
      <Text style={{ ...styles.text, ...styles.title }}>
        NOTIFICATION SCREEN
      </Text>
      <Text style={styles.text}>Demo React Native Expo Notification</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.replace('Home');
        }}
      />
    </CommonFooter>
  );
};

export default NotificationScreen;
