import { StyleSheet } from "react-native";

const leftSpace = 30;

export default StyleSheet.create({
  contentContainer: {
    position: "relative",
    paddingVertical: 15,
    marginRight: 15,
    marginLeft: leftSpace,
    borderBottomWidth: 0.3,
  },
  icon: {
    position: "absolute",
    color: "#B10068",
    top: 20,
    left: leftSpace / 2 - 4,
  },
});
