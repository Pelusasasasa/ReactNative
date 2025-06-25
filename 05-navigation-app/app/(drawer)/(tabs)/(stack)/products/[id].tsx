import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const ProductScreen = () => {

    const {id} = useLocalSearchParams();
    const navigation = useNavigation();

    const producto = products.find(elem => elem.id = id);

    useEffect(() => {
      navigation.setOptions({
        title: producto?.title || 'Producto',
      });
    }, [producto])

    if(!producto){
        return <Redirect href='/'/>
    }

  return (
    <View className='px-5 mt-2'>
    <Text className='font-work-black text-2xl'>{producto.title}</Text>
    <Text>{producto?.description}</Text>
    <Text className='font-work-black'>${producto.price}</Text>
    </View>
  )
}

export default ProductScreen