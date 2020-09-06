import React from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../../navigators/MainNavigator";
import Body from "../../components/Body/Body";
import NotificationItem from "../../components/NofificationItem/NotificationItem";
import styles from "./styles";

type NotificationScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Notification"
>;
type NotificationProps = {
  navigation: NotificationScreenNavigationProp;
};

const NOTIFICATION_DUMMY = [
  {
    id: 1,
    title: "Tiền hoa hồng!",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, ipsam.",
    seen: false,
    sendAt: "15:08 - 02/09/2020",
  },
  {
    id: 2,
    title: "Điểm thưởng",
    description: "Lorem ipsum dolor, sit amet.",
    seen: false,
    sendAt: "11:12 - 02/09/2020",
  },
  {
    id: 3,
    title: "Nạp điện thoại thành công!",
    description: "Consectetur adipisicing elit. Eum, ipsam.",
    seen: true,
    sendAt: "17:00 - 01/09/2020",
  },
  {
    id: 4,
    title: "Nạp tiền thành công!",
    description:
      "Saepe accusantium provident ratione dolor tenetur ipsam unde illo dolorem libero fuga?Saepe accusantium provident ratione dolor tenetur ipsam unde illo dolorem libero fuga?",
    seen: true,
    sendAt: "8:08 - 01/09/2020",
  },
  {
    id: 5,
    title: "Thẻ quà 20K - Giải trí thả ga",
    description: "Ratione dolor tenetur ipsam unde illo dolorem libero fuga?",
    seen: true,
    sendAt: "11:55 - 28/08/2020",
  },
];

const NotificationScreen = ({ navigation }: NotificationProps) => {
  return (
    <Body style={styles.container}>
      {NOTIFICATION_DUMMY.map((notification) => {
        return (
          <NotificationItem key={notification.id} notification={notification} />
        );
      })}
    </Body>
  );
};

export default NotificationScreen;
