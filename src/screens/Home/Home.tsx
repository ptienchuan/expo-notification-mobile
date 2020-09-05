import React from "react";
import { Text, Button, View } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../navigators/MainNavigator";
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
    <View style={styles.container}>
      <Text style={{ ...styles.text, ...styles.title }}>HOME SCREEN</Text>
      <Text style={styles.text}>Demo React Native Expo Notification</Text>
      <Button
        title="Notification"
        onPress={() => {
          navigation.navigate("Notifications");
        }}
      />
    </View>
  );
};

export default HomeScreen;
