import React from 'react';
import { RouteProp } from '@react-navigation/native';
import Body from '../../components/Body/Body';
import BaseText from '../../components/UI/BaseText/BaseText';
import Heading from '../../components/UI/Heading/Heading';
import { NotificationStackParamList } from '../../navigators/NotificationNavigator';
import styles from './styles';

type NotificationDetailRouteProp = RouteProp<
  NotificationStackParamList,
  'NotificationDetail'
>;

type NotificationDetailProps = {
  route: NotificationDetailRouteProp;
};

const NotificationDetailScreen = ({
  route,
}: NotificationDetailProps): JSX.Element => {
  const { notification } = route.params;
  return (
    <Body style={styles.container}>
      <Heading>{notification.title}</Heading>
      <BaseText style={styles.time}>{notification.sendAt}</BaseText>
      <BaseText style={styles.desc}>{notification.description}</BaseText>
      {notification.content && (
        <BaseText style={styles.content}>{notification.content}</BaseText>
      )}
    </Body>
  );
};

export default NotificationDetailScreen;
