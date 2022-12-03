import { StyleSheet } from "react-native";
import { fontPixel } from "utils/normalize";
import { DROPDOWN_HEIGHT } from "utils/Utils";

const dropdownStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 30,
    height: DROPDOWN_HEIGHT,
    overflow: 'hidden',
  },
  text: {
    fontSize: fontPixel(DROPDOWN_HEIGHT),
    lineHeight: DROPDOWN_HEIGHT,
    textTransform: 'uppercase',
    fontWeight: '800',
    color: 'black'
  }
})

export { dropdownStyles }