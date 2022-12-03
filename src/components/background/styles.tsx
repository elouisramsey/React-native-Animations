import { StyleSheet } from 'react-native'
import { BACKGROUND_SIZE } from 'utils/Utils'

const backgroundStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle: {
    width: BACKGROUND_SIZE,
    height: BACKGROUND_SIZE,
    borderRadius: BACKGROUND_SIZE / 2,
    position: 'absolute',
    top: '20%',
    // opacity: 0.6
  }
})

export { backgroundStyles }
