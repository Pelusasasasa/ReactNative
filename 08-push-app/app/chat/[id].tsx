import { ThemedText } from '@/components/ThemedText'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const CathIdScreen = () => {
    const { id } = useLocalSearchParams()
  return (
    <View style={{ marginHorizontal: 10 }}>
        <ThemedText style={{fontSize: 25, marginBottom: 10}}>
            Chad ID Screen
        </ThemedText>
        <ThemedText style={{fontSize: 25, marginBottom: 10}}>
            Chad ID: {id}
        </ThemedText>
    </View>
  )
}

export default CathIdScreen