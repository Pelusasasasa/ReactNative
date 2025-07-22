import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedLink from '@/presentation/theme/components/ThemedLink';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemeTextInput from '@/presentation/theme/components/ThemeTextInput';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';

const LoginScreen = () => {

  const { login } = useAuthStore();

  const { height } = useWindowDimensions();
  const backgroudColor = useThemeColor({}, 'background');

  const [isPosting, setIsPosting]= useState<boolean>(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const onLogin = async() => {
    if (form.email.length === 0 || form.password.length === 0) return;
    

    setIsPosting(true);
    const wasSuccessfull = await login(form.email, form.password);
    setIsPosting(false);



    if(wasSuccessfull){
      router.replace('/')
      return;
    };

    Alert.alert('Error', 'Usuario o contraseña incorrecta')


  }

  return (
    <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
      <ScrollView style={{paddingHorizontal: 40, backgroundColor: backgroudColor}}>

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

            onChangeText={(value) => setForm({...form, email: value})}
          />

          <ThemeTextInput
            placeholder='Contrasena'
            secureTextEntry
            autoCapitalize='none'
            icon='lock-closed-outline'

            onChangeText={(value) => setForm({...form, password: value})}
          />
        </View>

        <View style={{marginVertical: 10}}/>

        <ThemedButton icon='arrow-forward-outline' onPress={onLogin} disabled={isPosting}>
          Ingresar
        </ThemedButton>

        <View style={{marginTop: 30}}/>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ThemedText>¿No tienes cuenta?</ThemedText>
          <ThemedLink href='/auth/register' style={{marginHorizontal: 10}}>Crear Cuenta</ThemedLink>
        </View>


      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen