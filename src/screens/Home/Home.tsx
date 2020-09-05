import React from "react";
import { Text, Button } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../navigators/MainNavigator";
import Body from "../../components/Body/Body";
import styles from "./styles";

type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  "Home"
>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: HomeProps) => {
  return (
    <Body style={styles.container}>
      <Text style={{ ...styles.text, ...styles.title }}>HOME SCREEN</Text>
      <Text style={styles.text}>Demo React Native Expo Notification</Text>
      <Button
        title="Notification"
        onPress={() => {
          navigation.navigate("Notifications");
        }}
      />
    </Body>
  );
};

export default HomeScreen;
