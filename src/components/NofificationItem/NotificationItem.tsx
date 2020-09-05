import React from "react";
import { View } from "react-native";
import { Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

interface NotificationSchema {
  id: number;
  description: string;
  seen: boolean;
  sendAt: string;
}

type NotificationItemProps = {
  notification: NotificationSchema;
};

const NotificationItem = ({ notification }: NotificationItemProps) => {
  return (
    <View>
      <FontAwesome name="circle" size={10} style={styles.icon} />
      <View style={styles.contentContainer}>
        <Text>{notification.description}</Text>
      </View>
    </View>
  );
};

export default NotificationItem;
