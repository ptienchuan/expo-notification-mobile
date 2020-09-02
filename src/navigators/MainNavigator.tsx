import React from "react";
import { Icon } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/TabBar/TabBar";
import HomeScreen from "../screens/Home/Home";
import NotificationScreen from "../screens/Notification/Notification";

type RootStackParamList = {
  Home: undefined;
  Notifications: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => <Icon name="apps" active={focused} />,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            title: "Notifications",
            tabBarIcon: ({ focused }) => (
              <Icon name="notifications" active={focused} />
            ),
            tabBarBadge: 2,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { RootStackParamList };
export default MainNavigator;
