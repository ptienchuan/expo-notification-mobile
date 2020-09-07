import React from 'react';
import { Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar/TabBar';
import HomeNavigator from './HomeNavigator';
import NotificationNavigator from './NotificationNavigator';

type RootTabParamList = {
  Home: undefined;
  Notification: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const MainNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }): JSX.Element => (
              <Icon name="apps" active={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationNavigator}
          options={{
            title: 'Notifications',
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <Icon name="notifications" active={focused} />
            ),
            tabBarBadge: 2,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { RootTabParamList };
export default MainNavigator;
