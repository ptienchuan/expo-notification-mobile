import React from "react";
import { RouteProp } from "@react-navigation/native";
import Body from "../../components/Body/Body";
import BaseText from "../../components/UI/BaseText/BaseText";
import { NotificationStackParamList } from "../../navigators/NotificationNavigator";
import styles from "./styles";

type NotificationDetailRouteProp = RouteProp<
  NotificationStackParamList,
  "NotificationDetail"
>;

type NotificationDetailProps = {
  route: NotificationDetailRouteProp;
};

const NotificationDetailScreen = ({ route }: NotificationDetailProps) => {
  const { notification } = route.params;
  return (
    <Body style={styles.container}>
      <BaseText>{notification.title}</BaseText>
      <BaseText>{notification.sendAt}</BaseText>
      <BaseText>{notification.description}</BaseText>
    </Body>
  );
};

export default NotificationDetailScreen;
