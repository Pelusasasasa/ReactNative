import { useAnimation } from '@/hooks/useAnimation';
import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';


interface Props {
    uri: string;
    style: StyleProp<ImageStyle>
}

export default function FadeInImage({uri, style}: Props) {
    const { fadeIn, animatedOpacity } = useAnimation()
    const [isLoading, setIsLoading] = useState(true);

    const handleLoading = () => {
        setIsLoading(false);
        fadeIn({});
    }

  return (
    <View className='justify-center items-center '>
      { isLoading && <ActivityIndicator size={50}/>}
      <Animated.Image
        source={{ uri }}
        style={[ style, {opacity: animatedOpacity} ]}
        onLoadEnd={handleLoading}

        />
    </View>
  )
}