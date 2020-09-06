import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationScreen from "../screens/Notification/Notification";
import NotificationDetailScreen from "../screens/NotificationDetail/NotificationDetail";
import { NotificationSchema } from "../types/Notification";

type NotificationStackParamList = {
  Notification: undefined;
  NotificationDetail: {
    notification: NotificationSchema;
  };
};

const Stack = createStackNavigator<NotificationStackParamList>();

const NotificationNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Notification">
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen
        name="NotificationDetail"
        component={NotificationDetailScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};

export { NotificationStackParamList };
export default NotificationNavigator;
