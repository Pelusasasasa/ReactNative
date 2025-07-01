import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedInputText from '@/presentation/shared/ThemedInputText';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const TextInputsScreen = () => {

  const isIos = Platform.OS === 'ios'

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  return (
    <KeyboardAvoidingView behavior={isIos ? 'height' : undefined}>
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className='mb-5'>
            <ThemedInputText 
              onChangeText={(text) => setForm({...form, name: text})}
              autoCapitalize='words' 
              placeholder='Nombre Completo'
              autoCorrect={false}
              />

            <ThemedInputText 
              onChangeText={(text) => setForm({...form, email: text})}
              keyboardType='email-address'
              placeholder='Correo Electronico'
              autoCorrect={false}
              />

            <ThemedInputText 
              onChangeText={(text) => setForm({...form, phone: text})}
              keyboardType='phone-pad'
              placeholder='Telefono'
              autoCorrect={false}
              />
          </ThemedCard>

          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
        
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
