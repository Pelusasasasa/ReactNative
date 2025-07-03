import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';

const modalScreen = () => {
  return (
    <ThemedView className='justify-center items-center flex-1' bgColor='#A52182'>
      <ThemedText>Hola, Soy un Modal</ThemedText>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
    </ThemedView>
  )
}

export default modalScreen