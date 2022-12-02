import { View, Text, TextProps, Animated } from 'react-native'
import React from 'react'
import { displayTextStyles } from './styles'

interface DisplayTextProps extends TextProps {
  paragraph?: boolean
  headersStyles?: any
  textStyle?: any
  numberOfLines?: number
  textContainer?: any
}

// const DisplayText: React.FC<DisplayTextProps> = (props) => {
//   return (
//     <View style={props.textContainer}>
//       <Text
//         numberOfLines={props.numberOfLines}
//         style={[displayTextStyles.text, props.textStyle]}
//       >
//         {props.children}
//       </Text>
//     </View>
//   )
// }

class DisplayText extends React.Component<DisplayTextProps> {
  render() {
    return (
      <Animated.View style={this.props.textContainer}>
        <Animated.Text
          numberOfLines={this.props.numberOfLines}
          style={[displayTextStyles.text, this.props.textStyle]}
        >
          {this.props.children}
        </Animated.Text>
      </Animated.View>
    )
  }
}

export { DisplayText }
