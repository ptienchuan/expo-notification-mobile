import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/MainNavigator';
import CommonFooter from '../../components/FooterTab/CommonFooter';
import styles from './style';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: HomeProps) => {
  return (
    <CommonFooter>
      <Text style={{ ...styles.text, ...styles.title }}>HOME SCREEN</Text>
      <Text style={styles.text}>Demo React Native Expo Notification</Text>
      <Button
        title="Notification"
        onPress={() => {
          navigation.navigate('Notifications');
        }}
      />
    </CommonFooter>
  );
};

export default HomeScreen;
