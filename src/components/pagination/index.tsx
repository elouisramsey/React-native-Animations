import { View, Text, Animated } from 'react-native'
import React from 'react'
import { IData } from 'utils/types/DataType'
import { paginationStyles } from './styles'
import { DOT_SIZE, width } from 'utils/Utils'

type Props = {
  data: IData[]
  scrollX: any
}

const Pagination = ({ data, scrollX }: Props) => {
  const translateX = scrollX.interpolate({
    inputRange: [-width, 0, width],
    outputRange: [-DOT_SIZE, 0, DOT_SIZE]
  })

  return (
    <View style={paginationStyles.pagination}>
      <Animated.View
        style={[
          paginationStyles.indicator,
          {
            transform: [
              {
                translateX
              }
            ]
          }
        ]}
      />
      {data.map((item) => {
        const { key, color } = item
        return (
          <View key={key} style={paginationStyles.container}>
            <View
              style={[
                paginationStyles.dot,
                {
                  backgroundColor: color
                }
              ]}
            />
          </View>
        )
      })}
    </View>
  )
}

export default Pagination
