import { useFonts } from 'expo-font'
import { View } from 'react-native'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import Slider from 'screens/Slider'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    SF_Pro: require('assets/fonts/SF-Pro-Text-Regular.otf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View onLayout={onLayoutRootView} style={{flex: 1}}>
      <Slider />
    </View>
  )
}
