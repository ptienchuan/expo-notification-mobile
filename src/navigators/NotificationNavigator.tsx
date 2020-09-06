import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationScreen from "../screens/Notification/Notification";

type NotificationStackParamList = {
  Notification: undefined;
  NotificationDetail: undefined;
};

const Stack = createStackNavigator<NotificationStackParamList>();

const NotificationNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Notification">
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export { NotificationStackParamList };
export default NotificationNavigator;
