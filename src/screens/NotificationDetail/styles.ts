import { StyleSheet } from "react-native";
import { HORIZONTAL_SPACE, CONTENT_LINE_HEIGHT } from "../../constants/Style";

export default StyleSheet.create({
  container: {
    paddingHorizontal: HORIZONTAL_SPACE,
  },
  time: {
    color: "#8F8B93",
  },
  desc: {
    fontWeight: "bold",
    paddingVertical: 10,
    lineHeight: CONTENT_LINE_HEIGHT,
  },
  content: {
    lineHeight: CONTENT_LINE_HEIGHT,
  },
});
