import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { NotificationStackParamList } from '../../navigators/NotificationNavigator';
import Body from '../../components/Body/Body';
import NotificationItem from '../../components/NofificationItem/NotificationItem';
import { Notification } from '../../types/Notification';

type NotificationScreenNavigationProp = StackNavigationProp<
  NotificationStackParamList,
  'Notification'
>;

type NotificationNavProps = {
  navigation: NotificationScreenNavigationProp;
};

type NotificationStoreProps = {
  notifications: Notification[];
};

type NotificationDispatchProps = {
  seenNotification: (id: number) => void;
};

type NotificationProps = NotificationNavProps & NotificationStoreProps;

const NotificationScreen = ({
  navigation,
  notifications,
  seenNotification,
}: NotificationProps & NotificationDispatchProps): JSX.Element => {
  return (
    <Body>
      {notifications.map((notification) => {
        const moveToDetail = () => {
          seenNotification(notification.id);
          navigation.navigate('NotificationDetail', { notification });
        };
        return (
          <NotificationItem
            key={notification.id}
            notification={notification}
            pressed={moveToDetail}
          />
        );
      })}
    </Body>
  );
};

export {
  NotificationNavProps,
  NotificationStoreProps,
  NotificationProps,
  NotificationDispatchProps,
};
export default NotificationScreen;
