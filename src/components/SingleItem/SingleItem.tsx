import { View, ImageSourcePropType, Image, Animated } from 'react-native'
import React from 'react'
import { singleItemStyles } from './styles'
import { DisplayText } from 'components/Text/DisplayText'
import { width } from 'utils/Utils'

type Props = {
  imageUri: string
  description: string
  name: string
  index: number
  scrollX: any
}

const AnimatedDisplayText = Animated.createAnimatedComponent(DisplayText)

const SingleItem = ({ imageUri, description, name, scrollX, index }: Props) => {
  // prev slide, current slide, next slide
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
  const inputRangeOpacity = [
    (index - 0.3) * width,
    index * width,
    (index + 0.3) * width
  ]
  const scale = scrollX?.interpolate({
    inputRange,
    outputRange: [0, 1, 0]
  })

  const translateXName = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.2, 0, -width * 0.2]
  })
  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.4, 0, -width * 0.6]
  })
  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0.5]
  })

  return (
    <View style={singleItemStyles.item}>
      <Animated.Image
        source={imageUri as ImageSourcePropType}
        style={[
          singleItemStyles.image,
          {
            transform: [{ scale }]
          }
        ]}
      />
      <View style={[singleItemStyles.textContainer]}>
        <DisplayText
          textStyle={[
            singleItemStyles.name,
            {
              opacity,
              transform: [
                {
                  translateX: translateXName
                }
              ]
            }
          ]}
        >
          {name}
        </DisplayText>
        <DisplayText
          textStyle={[
            singleItemStyles.description,
            {
              opacity,
              transform: [
                {
                  translateX: translateXDescription
                }
              ]
            }
          ]}
        >
          {description}
        </DisplayText>
      </View>
    </View>
  )
}

export default SingleItem
