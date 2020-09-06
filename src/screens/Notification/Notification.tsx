import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { NotificationStackParamList } from "../../navigators/NotificationNavigator";
import Body from "../../components/Body/Body";
import NotificationItem from "../../components/NofificationItem/NotificationItem";
import { NOTIFICATION_DUMMY } from "../../constants/Notification";

type NotificationScreenNavigationProp = StackNavigationProp<
  NotificationStackParamList,
  "Notification"
>;

type NotificationProps = {
  navigation: NotificationScreenNavigationProp;
};

const NotificationScreen = ({ navigation }: NotificationProps) => {
  return (
    <Body>
      {NOTIFICATION_DUMMY.map((notification) => {
        const moveToDetail = () => {
          navigation.navigate("NotificationDetail", { notification });
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
