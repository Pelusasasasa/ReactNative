import { Platform, Text, View } from 'react-native'

import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { globalStyles } from '@/styles/styles-global'

import * as NavigationBar from 'expo-navigation-bar'

const isAndroid = Platform.OS === 'android'

if (isAndroid){
  NavigationBar.setBackgroundColorAsync('black')
}

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if(!loaded) {
    return null
  }


  return (
    <View style={globalStyles.background}>
      <Text>RootLayout</Text>

      <Slot />

      <StatusBar style='light'/>
    </View>
  )
}

