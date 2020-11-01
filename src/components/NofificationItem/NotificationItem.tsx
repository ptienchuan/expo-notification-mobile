import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BaseText from '../../components/UI/BaseText/BaseText';
import { Notification } from '../../types/Notification';
import styles from './styles';

type NotificationItemProps = {
  notification: Notification;
  pressed?: () => void;
};

const NotificationItem = ({
  notification,
  pressed,
}: NotificationItemProps): JSX.Element => {
  let dotAtFront = <FontAwesome name="circle" size={10} style={styles.icon} />;
  let descStyle = undefined;
  const titleStyle = { ...styles.title };
  const timeStyle = { ...styles.time };

  if (notification.seen) {
    dotAtFront = <></>;
    descStyle = { ...styles.seenText };
    Object.assign(titleStyle, styles.seenText);
    Object.assign(timeStyle, styles.seenText);
  }

  return (
    <TouchableOpacity onPress={pressed}>
      {dotAtFront}
      <View style={styles.container}>
        <BaseText style={titleStyle}>{notification.title}</BaseText>
        <BaseText style={descStyle}>{notification.description}</BaseText>
        <BaseText style={timeStyle}>{notification.sendAtString || ''}</BaseText>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
