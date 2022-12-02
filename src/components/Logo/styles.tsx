import { StyleSheet } from 'react-native'
import { fontPixel } from 'utils/normalize'
import { LOGO_HEIGHT, LOGO_WIDTH } from 'utils/Utils'

const logoStyles = StyleSheet.create({
  logo: {
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH,
    position: 'absolute',
    opacity: 0.9,
    resizeMode: 'contain',
    left: 10,
    transform: [
      { translateX: -LOGO_WIDTH / 2 },
      { translateY: -LOGO_HEIGHT / 2 },
      { rotateZ: '-90deg' },
      { translateX: LOGO_WIDTH / 2 },
      { translateY: LOGO_HEIGHT / 2 }
    ],
    bottom: 10
  },
  logoText: {
    color: 'black',
    fontSize: fontPixel(45),
    lineHeight: 55,
    letterSpacing: 2,
    fontStyle: 'italic'
  }
})

export { logoStyles }
