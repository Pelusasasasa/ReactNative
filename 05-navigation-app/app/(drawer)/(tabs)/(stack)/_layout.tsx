import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';
import React from 'react';

const StackLayout = () => {


    const navigation = useNavigation();

    const onHeaderLeftClick = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }

  return <Stack
    screenOptions={{
        // headerShown: false,
        contentStyle: {
            backgroundColor: '#fff'
        },
        headerLeft: ({tintColor, canGoBack}) => 
        <Ionicons name={canGoBack ? 'chevron-back-circle-outline' : 'menu'} size={20} className='mr-5'
         onPress={onHeaderLeftClick}/>, // Remove the back button
    }}
  >
    <Stack.Screen 
        name='home/index'
        options={{
            title: 'Inicio'
        }}
    />
    <Stack.Screen 
        name='products/index'
        options={{
            title: 'Productos'
        }}
    />
    <Stack.Screen 
        name='profile/index'
        options={{
            title: 'Perfil'
        }}
    />
    <Stack.Screen 
        name='settings/index'
        options={{
            title: 'Ajustes'
        }}
    />
  </Stack>
}

export default StackLayout