import { View, Text, Animated } from 'react-native'
import React from 'react'
import { dropdownStyles } from './styles'
import { DisplayText } from 'components/Text/DisplayText'
import { DATA } from 'src/data'
import { DROPDOWN_HEIGHT, width } from 'utils/Utils'

type Props = {
  scrollX: any
}

const ItemTypeDropdown = ({ scrollX }: Props) => {
  const inputRange = [-width, 0, width]
  const outputRange = [DROPDOWN_HEIGHT, 0, -DROPDOWN_HEIGHT]

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange
  })
  return (
    <View style={dropdownStyles.container}>
      <Animated.View
        style={{
          transform: [
            {
              translateY
            }
          ]
        }}
      >
        {DATA.map(({ type }, index) => {
          return (
            <DisplayText textStyle={dropdownStyles.text} key={index}>
              {type}
            </DisplayText>
          )
        })}
      </Animated.View>
    </View>
  )
}

export default ItemTypeDropdown
