import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Footer, FooterTab } from 'native-base';
import { RootStackParamList } from '../../navigators/MainNavigator';
import FooterButton from '../FooterButton/FooterButton';
import styles from './styles';

type CommonNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home' | 'Notifications'
>;

type CommonFooterProps = {
  navigation: CommonNavigationProp;
  from: string;
  children?: any;
};

const CommonFooter = ({ navigation, children, from }: CommonFooterProps) => {
  console.log(from);
  const moveToNotifications = () => navigation.replace('Notifications');
  const moveToHome = () => navigation.replace('Home');
  return (
    <Container>
      <View style={styles.container}>{children}</View>
      <Footer>
        <FooterTab>
          <FooterButton
            title="Apps"
            icon="apps"
            badge={2}
            onPress={moveToHome}
          />
          <FooterButton
            title="Notifications"
            icon="notifications"
            onPress={moveToNotifications}
          />
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default CommonFooter;
