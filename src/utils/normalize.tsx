import { Dimensions, PixelRatio, ScaledSize } from 'react-native'

type Mode = 'width' | 'height'
type Scale = number

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT }: ScaledSize =
  Dimensions.get('window')

const widthScale: Scale = SCREEN_WIDTH / 414
const heightScale: Scale = SCREEN_HEIGHT / 896

export const normalize = (size: number, based: Mode = 'width'): number => {
  const newSize: number =
    based === 'height' ? size * heightScale : size * widthScale

  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

//for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, 'width')
}
//for height  pixel
const heightPixel = (size: number) => {
  return normalize(size, 'height')
}
//for font  pixel
const fontPixel = (size: number) => {
  return heightPixel(size)
}
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number) => {
  return heightPixel(size)
}
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size)
}

export { fontPixel, pixelSizeVertical, pixelSizeHorizontal }
