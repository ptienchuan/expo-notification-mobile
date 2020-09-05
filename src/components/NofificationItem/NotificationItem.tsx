import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import BaseText from "../../components/UI/BaseText/BaseText";
import styles from "./styles";

interface NotificationSchema {
  id: number;
  title: string;
  description: string;
  seen: boolean;
  sendAt: string;
}

type NotificationItemProps = {
  notification: NotificationSchema;
};

const NotificationItem = ({ notification }: NotificationItemProps) => {
  let dotAtFront = <FontAwesome name="circle" size={10} style={styles.icon} />;
  let descStyle = undefined;
  const titleStyle = { ...styles.title };
  const timeStyle = { ...styles.time };

  if (notification.seen) {
    dotAtFront = <></>;
    descStyle = { ...styles.seenText };
    Object.assign(titleStyle, styles.seenText);
    Object.assign(timeStyle, styles.seenText);
  }

  return (
    <TouchableOpacity onPress={() => console.log("TOUCHED")}>
      {dotAtFront}
      <View style={styles.container}>
        <BaseText style={titleStyle}>{notification.title}</BaseText>
        <BaseText style={descStyle}>{notification.description}</BaseText>
        <BaseText style={timeStyle}>{notification.sendAt}</BaseText>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
