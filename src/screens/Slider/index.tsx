import { View, Animated } from 'react-native'
import React, { useRef } from 'react'
import { sliderStyles } from './styles'
import SingleItem from 'components/SingleItem/SingleItem'
import { DATA } from 'src/data'
import Logo from 'components/Logo'
import ItemTypeDropdown from 'components/ItemType'
import CircleBackground from 'components/background'
import Pagination from 'components/pagination'

type Props = {}

const Slider = (props: Props) => {
  const scrollX = useRef(new Animated.Value(0)).current
  return (
    <View style={sliderStyles.container}>
      <CircleBackground scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key.toString()}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEventThrottle={16}
        renderItem={({ item, index }) => (
          <SingleItem {...item} index={index} scrollX={scrollX} />
        )}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ],
          {
            useNativeDriver: true
          }
        )}
      />
      <Logo />
      <ItemTypeDropdown scrollX={scrollX} />
      <Pagination data={DATA} scrollX={scrollX} />
    </View>
  )
}

export default Slider
