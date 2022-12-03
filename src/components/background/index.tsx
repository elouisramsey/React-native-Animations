import { View, StyleSheet, Animated } from 'react-native'
import React from 'react'
import { backgroundStyles } from './styles'
import { DATA } from 'src/data'
import { width } from 'utils/Utils'

type Props = {
  scrollX: any
}

const CircleBackground = ({ scrollX }: Props) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, backgroundStyles.container]}>
      {DATA.map(({ color }, index) => {
        const inputRange = [
          (index - 0.5) * width,
          index * width,
          (index + 0.5) * width
        ]

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0]
        })

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          // clamp range so it doesn't keep growing
          extrapolate: 'clamp'
        })

        return (
          <Animated.View
            key={index}
            style={[
              backgroundStyles.circle,
              {
                backgroundColor: color,
                opacity,
                transform: [
                  {
                    scale
                  }
                ]
              }
            ]}
          />
        )
      })}
    </View>
  )
}

export default CircleBackground
