import React from 'react'
import { Image, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

interface Props {
    images: string[]
}

const ProductImages = ({images}: Props) => {

    if(images.length === 0){
        return (
            <View>
                <Image source={ require('../../../assets/images/no-product-image.png') }
                style={{height: 300, width: 300}}/>
            </View>
        )
    }

  return (
    <FlatList
        data={images}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator = {false}
        renderItem={({item}) => (
            <Image source={{uri: item}} style={{height: 300, width: 300, marginHorizontal: 7, borderRadius: 5}}/>
        )}
    />
  )
}

export default ProductImages