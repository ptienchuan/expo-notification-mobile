import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from '../containers/Notification';
import NotificationDetailScreen from '../containers/NotificationDetail';
import { Notification } from '../types/Notification';

type NotificationStackParamList = {
  Notification: undefined;
  NotificationDetail: {
    notification: Notification;
  };
};

const Stack = createStackNavigator<NotificationStackParamList>();

const NotificationNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Notification">
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen
        name="NotificationDetail"
        component={NotificationDetailScreen}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
};

export { NotificationStackParamList };
export default NotificationNavigator;
