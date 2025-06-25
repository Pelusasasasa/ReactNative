import { Redirect } from 'expo-router'
import React from 'react'

export default function index() {
  return (

    <Redirect href="/home" />
    // <Redirect href="/tabs" />
    // <Redirect href="/drawer" />
    // <SafeAreaView className='mt-6 mx2.5'>
    //   <View className='mt-10'>
    //     <Text className='text-3xl text-tertiary' style={{fontFamily: 'WorkSans-Black'}}>Holas Mundo</Text>
    //     <Text className='text-2xl font-work-black text-primary'>Holas Mundo</Text>
    //     <Text className='text-xl font-work-light text-secondary' >Holas Mundo</Text>
    //     <Link href='/home/index'>Home</Link>
    //   </View>
    // </SafeAreaView>
  )
}