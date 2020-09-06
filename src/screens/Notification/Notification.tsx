import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native";
import { NotificationStackParamList } from "../../navigators/NotificationNavigator";
import Body from "../../components/Body/Body";
import NotificationItem from "../../components/NofificationItem/NotificationItem";
import styles from "./styles";
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
    <Body style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </Body>
  );
};

export default NotificationScreen;
