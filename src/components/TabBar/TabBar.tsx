import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Footer, FooterTab } from "native-base";
import TabButton from "../TabButton/TabButton";

/**
 * Here I used custom tab bar for bottom-tab navigation
 * Document here: https://reactnavigation.org/docs/bottom-tab-navigator/#tabbar
 *
 */
const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <Footer>
      <FooterTab>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const label =
            options.title !== undefined ? options.title : route.name;

          const icon =
            options.tabBarIcon === undefined
              ? null
              : options.tabBarIcon({ focused: isFocused, color: "", size: 0 });

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TabButton
              title={label}
              icon={icon}
              onPress={onPress}
              active={isFocused}
              key={route.name}
              badge={options.tabBarBadge}
            />
          );
        })}
      </FooterTab>
    </Footer>
  );
};

export default TabBar;
