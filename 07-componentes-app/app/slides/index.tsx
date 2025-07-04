import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { FlatList, Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, useWindowDimensions } from 'react-native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

const SlidesScreen = () => {

  const flatListref = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSliceIndex] = useState(0);
  const [enabledScroll, setEnabledScroll] = useState(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.round(contentOffset.x / layoutMeasurement.width);
    setCurrentSliceIndex(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollToSlide = ( index: number) => {
    if ( !flatListref.current ) return;

    flatListref.current.scrollToIndex({ index, animated: true });
  };

  useEffect(() => {
    currentSlideIndex === items.length - 1 && setEnabledScroll(true)
  }, [currentSlideIndex])

  return (
    <ThemedView margin>
      <FlatList
        ref={flatListref}
        data={items}
        horizontal
        pagingEnabled
        keyExtractor={item => item.title}
        renderItem={({item}) => <SlideImte item={item}/>}
        scrollEnabled={enabledScroll}
        onScroll={onScroll}
      />

      {
        currentSlideIndex === items.length - 1 
        ? (
          <ThemedButton className='absolute bottom-10 right-5 w-[150px]' onPress={() => router.dismiss()} >
            Finalizar
          </ThemedButton>
        )
        : (
          <ThemedButton className='absolute bottom-10 right-5 w-[150px]' onPress={() => scrollToSlide(currentSlideIndex + 1)}>
            Siguiente
          </ThemedButton>
        )
      }

      
    </ThemedView>
  );
};
export default SlidesScreen;


interface SlideItemProps {
  item: Slide; 
}


const SlideImte = ({ item }: SlideItemProps) => {

  const { width } = useWindowDimensions();
  const { title, desc, img } = item;

  return (
    <ThemedView className='flex-1 rounded p-10 justify-center bg-red-500' style={{width}}>
      <Image source={ img } style={{
        height: width * 0.7,
        width: width * 0.7,
        resizeMode: 'center',
        alignSelf: 'center'
       }}/>

      <ThemedText type='h1' className='text-light-primary dark:text-dark-primary'>
        {title}
      </ThemedText>

      <ThemedText className='mt-10'>{desc}</ThemedText>


    </ThemedView>
  )
}