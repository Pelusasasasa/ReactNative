import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedLink from '@/presentation/theme/components/ThemedLink';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemeTextInput from '@/presentation/theme/components/ThemeTextInput';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import React from 'react';
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';

const RegisterScreen = () => {

  const { height } = useWindowDimensions();
  const backgroudColor = useThemeColor({}, 'background')
  return (
    <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
      <ScrollView style={{paddingHorizontal: 40, backgroundColor: backgroudColor}}>

        <View style={{paddingTop: height * 0.35}}>
          <ThemedText type='title'>Registrar</ThemedText>
          <ThemedText style={{color: 'gray'}}>Por favor complete los datos para continuar</ThemedText>
        </View>

        <View style={{marginTop: 20}}>
          <ThemeTextInput
            placeholder='Nombre completo'
            keyboardType='default'
            autoCapitalize='words'
            icon='person-outline'
          />

          <ThemeTextInput
            placeholder='Correo electronico'
            keyboardType='email-address'
            autoCapitalize='none'
            icon='mail-outline'
          />

          <ThemeTextInput
            placeholder='Contrasena'
            secureTextEntry
            autoCapitalize='none'
            icon='lock-closed-outline'
          />
        </View>

        <View style={{marginVertical: 10}}/>

        <ThemedButton icon='arrow-forward-outline'>
          Crear Usuario
        </ThemedButton>

        <View style={{marginTop: 30}}/>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ThemedText>¿Ya tienes cuenta?</ThemedText>
          <ThemedLink href='/auth/login' style={{marginHorizontal: 10}}>Ingresar</ThemedLink>
        </View>


      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen