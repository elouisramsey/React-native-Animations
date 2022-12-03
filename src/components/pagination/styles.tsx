import { StyleSheet } from 'react-native'
import { DOT_SIZE } from 'utils/Utils'

const paginationStyles = StyleSheet.create({
  pagination: {
    position: 'absolute',
    right: 40,
    bottom: 75,
    flexDirection: 'row',
    height: DOT_SIZE
    // backgroundColor: 'green'
  },
  container: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15
  },
  indicator: {
    position: 'absolute',
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#e2e2e2'
  }
})

export { paginationStyles }
