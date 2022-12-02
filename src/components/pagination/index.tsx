import { View, Text } from 'react-native'
import React from 'react'
import { IData } from 'utils/types/DataType'
import { paginationStyles } from './styles'

type Props = {
  data: IData[]
}

const Pagination = ({ data }: Props) => {
  return (
    <View style={paginationStyles.pagination}>
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
