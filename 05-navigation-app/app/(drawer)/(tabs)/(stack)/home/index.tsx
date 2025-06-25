import CustomBotton from '@/components/shared/CustomBotton'
import { router } from 'expo-router'
import React from 'react'
import { SafeAreaView, View } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>

        <CustomBotton className='mb-5' color="primary" onPress={ () => router.push('/products')}>
          Productos
        </CustomBotton>

        <CustomBotton 
          className='mb-5 border border-gray-300' 
          color='secondary'
          onPress={ () => router.push('/profile')}>
          Perfil
        </CustomBotton>

        <CustomBotton 
          className='mb-5 border border-gray-300'
          color='tertiary'
          onPress={ () => router.push('/settings')}>
          Ajustes
        </CustomBotton>
        <CustomBotton 
          className='mb-5 border border-gray-300'
          color='primary'
          onPress={ () => router.push('/settings')}>
          Abrir Menu
        </CustomBotton>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen