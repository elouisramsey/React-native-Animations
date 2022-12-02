import { StyleSheet } from "react-native";
import { fontPixel } from "utils/normalize";

const displayTextStyles = StyleSheet.create({
  text: {
    fontSize: fontPixel(16),
    color: 'rgba(28, 25, 57, 0.8)',
    fontWeight: '400',
    lineHeight: 25,
    fontFamily: 'SF_Pro'
  }
})

export { displayTextStyles }
