import { StyleSheet } from 'react-native'
import { fontPixel, pixelSizeHorizontal, pixelSizeVertical } from 'utils/normalize'
import { height, width } from 'utils/Utils'

const singleItemStyles = StyleSheet.create({
  item: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: width * 0.75,
    height: width * 0.75,
    resizeMode: 'contain',
    flex: 1
  },
  textContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    flex: 0.5
  },
  name: {
    color: '#1f1f24',
    textTransform: 'uppercase',
    fontSize: fontPixel(24),
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: pixelSizeVertical(6)
  },
  description: {
    color: '#666',
    textAlign: 'left',
    lineHeight: 16 * 1.5,
    fontSize: fontPixel(16),
    fontWeight: '600',
    marginRight: pixelSizeHorizontal(10),
    width: width * 0.75
  }
})

export { singleItemStyles }
