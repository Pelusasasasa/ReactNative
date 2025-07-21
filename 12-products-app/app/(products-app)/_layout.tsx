import LogOutIconButton from '@/presentation/auth/components/LogOutIconButton';
import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { Redirect, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

const CheckAuthenticationLayout = () => {

    const { checkStatus, status} = useAuthStore();
    
    useEffect(() => {
        checkStatus();
    }, [])

    if(status === 'checking'){
        return ( 
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                marginBottom: 5
            }}>
                <ActivityIndicator/>

            </View>
        )
    };
    if( status === 'not-authenticated'){
        return <Redirect href='/auth/login' />
    };


  return (
    <Stack>
        <Stack.Screen name='(home)/index' options={{ title: 'Productos', headerLeft: () => <LogOutIconButton/>}}/>
        <Stack.Screen name='product/[id]' options={{ title: 'Producto'}}/>
    </Stack>
  )
}

export default CheckAuthenticationLayout