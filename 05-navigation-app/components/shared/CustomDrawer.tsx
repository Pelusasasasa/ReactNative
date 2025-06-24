import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'

const CustomDrawer = ( props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className='flex justify-center items-center mx-3 mb-10 h-[150px] rounded-lg bg-primary'>
        <View className='flex justify-center items-center bg-white rounded-full h-24 w-24 '>
            <Text className='text-primary text-3xl font-work-black'>FH</Text>
        </View>
      </View>

      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer