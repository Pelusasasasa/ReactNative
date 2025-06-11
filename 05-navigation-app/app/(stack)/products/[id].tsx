import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ProductScreen = () => {

    const params = useLocalSearchParams();

    const producto = products.find(elem => elem.id = params);

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