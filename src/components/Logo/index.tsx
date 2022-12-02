import { View, Text } from 'react-native'
import React from 'react'
import { DisplayText } from 'components/Text/DisplayText'
import { logoStyles } from './styles'

type Props = {}

const Logo = (props: Props) => {
  return (
    <View style={logoStyles.logo}>
      <DisplayText textStyle={logoStyles.logoText}>Ray Ban</DisplayText>
    </View>
  )
}

export default Logo
