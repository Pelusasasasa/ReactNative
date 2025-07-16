import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor'
import React from 'react'
import { Text, View } from 'react-native'

const HomeScreen = () => {

  const primary = useThemeColor({}, 'primary')

  return (
    <View style={{paddingTop: 100, paddingHorizontal: 20}}>
      <Text style={{fontFamily: 'KanitBold', color: primary}}>HomeScreen</Text>
      <Text style={{fontFamily: 'KanitRegular'}}>HomeScreen</Text>
      <Text style={{fontFamily: 'KanitThin'}}>HomeScreen</Text>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen