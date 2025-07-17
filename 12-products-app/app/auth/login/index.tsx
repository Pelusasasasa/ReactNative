import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemeTextInput from '@/presentation/theme/components/ThemeTextInput';
import React from 'react';
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';

const LoginScreen = () => {

  const { height } = useWindowDimensions();
  return (
    <KeyboardAvoidingView>
      <ScrollView style={{paddingHorizontal: 40}}>

        <View style={{paddingTop: height * 0.35}}>
          <ThemedText type='title'>Ingresar</ThemedText>
          <ThemedText style={{color: 'gray'}}>Por favor ingrese para continuar</ThemedText>
        </View>

        <View style={{marginTop: 20}}>
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

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen