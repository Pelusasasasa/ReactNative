import ThemedPressable from '@/presentation/components/shared/ThemedPressable'
import { ThemedText } from '@/presentation/components/shared/ThemedText'
import { usePermissionStore } from '@/presentation/store/usePermissions'
import React from 'react'
import { View } from 'react-native'

const PermissionScreen = () => {

  const { locationStatus, requestLocationPermission } = usePermissionStore()

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ThemedPressable onPress={requestLocationPermission}>
        Habilitar Ubicacion
      </ThemedPressable>
      <ThemedText>Estado actual: {locationStatus}</ThemedText>
    </View>
  )
}

export default PermissionScreen