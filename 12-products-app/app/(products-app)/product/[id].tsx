import { useProduct } from '@/presentation/products/hooks/useProduct';
import { ThemedView } from '@/presentation/theme/components/ThemedView';
import ThemeTextInput from '@/presentation/theme/components/ThemeTextInput';
import { Ionicons } from '@expo/vector-icons';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

const ProductScreen = () => {

  const navigation = useNavigation();
  const { id } = useLocalSearchParams()
  const { productQuery} = useProduct(`${id}`);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons name='camera-outline' size={25}/>
      )
    })
  }, []);

  useEffect(() => {
    if (productQuery.data){
      navigation.setOptions({
        title: productQuery.data.title
      })
    }
  }, [productQuery.data]);


  if(productQuery.isLoading) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={30}/>
        </View>
    )
  };

  if (!productQuery.data){
    return <Redirect href='/(products-app)/(home)'/>
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView >
      {/* Todo Product Images */}

      <ThemedView style={{marginHorizontal: 10, marginTop: 20}}>
        <ThemeTextInput placeholder='Titulo' style={{marginVertical: 5}}/>
        <ThemeTextInput placeholder='Slug' style={{marginVertical: 5}}/>
        <ThemeTextInput placeholder='Descripcion' multiline numberOfLines={5} style={{marginVertical: 5}}/>
      </ThemedView>

      <ThemedView style={{marginHorizontal: 10, marginVertical: 5, flexDirection: 'row', gap: 10}}>
        <ThemeTextInput placeholder='Precio' style={{flex: 1}}/>
        <ThemeTextInput placeholder='Inventario' style={{flex: 1}}/>
      </ThemedView>

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ProductScreen