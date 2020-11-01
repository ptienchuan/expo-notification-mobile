import React, { useEffect } from 'react';
import Body from '../../components/Body/Body';
import NotificationItem from '../../components/NofificationItem/NotificationItem';
import { StoreProps, DispatchProps } from '../../containers/Notification';

type NotificationProps = StoreProps & DispatchProps;

const NotificationScreen = (props: NotificationProps) => {
  const {
    navigation,
    notifications,
    seenNotification,
    fetchNotifications,
  } = props;

  useEffect(() => {
    fetchNotifications();
  }, []);

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

export default NotificationScreen;
