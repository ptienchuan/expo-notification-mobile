import { StyleSheet } from "react-native";
import { HORIZONTAL_SPACE } from "../../constants/Style";

const leftSpace = 40;

export default StyleSheet.create({
  container: {
    paddingVertical: 13,
    marginRight: HORIZONTAL_SPACE,
    marginLeft: leftSpace,
    borderBottomWidth: 0.3,
  },
  icon: {
    position: "absolute",
    color: "#B10068",
    top: 24,
    left: leftSpace / 2 - 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  time: {
    marginTop: 3,
    color: "#6D86CC",
  },
  seenText: {
    color: "#8F8B93",
    fontWeight: "normal",
  },
});
