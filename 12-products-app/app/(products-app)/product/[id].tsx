import { Size } from '@/core/product/interface/Product';
import ProductImages from '@/presentation/products/components/ProductImages';
import { useProduct } from '@/presentation/products/hooks/useProduct';
import { useCameraStore } from '@/presentation/store/useCameraStore';
import MenuIconBotton from '@/presentation/theme/components/MenuIconBotton';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemeButtonGroup from '@/presentation/theme/components/ThemedButtonGroup';
import { ThemedView } from '@/presentation/theme/components/ThemedView';
import ThemeTextInput from '@/presentation/theme/components/ThemeTextInput';
import { Redirect, router, useLocalSearchParams, useNavigation } from 'expo-router';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, RefreshControl, ScrollView, View } from 'react-native';

const ProductScreen = () => {

  const navigation = useNavigation();
  const { id } = useLocalSearchParams()
  const { productQuery, productMutation} = useProduct(`${id}`);
  const {clearImages, selectedImages} = useCameraStore()

  useEffect(() => {
    return ()  => {
      clearImages()
    }
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MenuIconBotton icon='camera-outline' onPress={() => {router.push('/camera')}}/>
        // <Ionicons name='camera-outline' size={25}/>
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

  const product = productQuery.data!;

  return (
    <Formik
      initialValues={product}
      onSubmit={(productLike) => {
        productMutation.mutate({
          ...productLike,
          images: [...productLike.images, ...selectedImages]
        })
      }}
      >
        {({values, handleSubmit, handleChange, setFieldValue}) => (
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView 
              refreshControl={
                <RefreshControl
                  refreshing={ productQuery.isFetching } 
                  onRefresh={async() => {
                    await productQuery.refetch();
                  }}
                />
              }
            >
            
            <ProductImages images={[...product.images, ...selectedImages]}/>

            <ThemedView style={{marginHorizontal: 10, marginTop: 20}}>
              <ThemeTextInput placeholder='Titulo' style={{marginVertical: 5}} value={values.title} onChangeText={handleChange('title')}/>
              <ThemeTextInput placeholder='Slug' style={{marginVertical: 5}} value={values.slug} onChangeText={handleChange('slug')}/>
              <ThemeTextInput placeholder='Descripcion' multiline numberOfLines={5} style={{marginVertical: 5}} value={values.description} onChangeText={handleChange('description')}/>
            </ThemedView>

            <ThemedView style={{marginHorizontal: 10, marginVertical: 5, flexDirection: 'row', gap: 10}}>
              <ThemeTextInput placeholder='Precio' style={{flex: 1}} value={values.price.toString()} onChangeText={handleChange('price')}/>
              <ThemeTextInput placeholder='Inventario' style={{flex: 1}} value={values.stock.toString()} onChangeText={handleChange('.stock')}/>
            </ThemedView>

            <ThemedView style={{marginHorizontal: 10}}>
              <ThemeButtonGroup
                options={['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']}
                selectedOptions={values.sizes}
                onSelect={(selectedSize) => {
                  const newSizesValues = values.sizes.includes(selectedSize as Size) ? values.sizes.filter( s => s !== selectedSize) : [...values.sizes, selectedSize];
                  setFieldValue('sizes', newSizesValues);
                }}
              />

              <ThemeButtonGroup
                options={['kid', 'men', 'women', 'unisex']}
                selectedOptions={[values.gender]}
                onSelect={(selectedOption) => {setFieldValue('gender', selectedOption)}}
              />
            </ThemedView>


            <View style={{
              marginHorizontal: 10,
              marginBottom: 50,
              marginTop: 20
            }}>
              <ThemedButton onPress={() => handleSubmit()} icon='save-outline'>Guardar</ThemedButton>
            </View>

            </ScrollView>
          </KeyboardAvoidingView>
        )}
    </Formik>
  )
}

export default ProductScreen;

