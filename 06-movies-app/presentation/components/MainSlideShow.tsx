import React, { useRef } from 'react';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

import { Movie } from '@/infractructure/interfaces/movie.interfaces';
import { useWindowDimensions, View } from 'react-native';
import MoviePoster from './movies/MoviePoster';

interface Props {
    movies: Movie[]
}

const MainSlideShow = ({movies}: Props) => {

    const ref = useRef<ICarouselInstance>(null)
    const width = useWindowDimensions().width;
  return (
    <View className='h-[250px] w-full'>
        <Carousel
            data={movies}
            ref={ref}
            renderItem={({item}) => <MoviePoster poster={item.poster} id={item.id} />}
            width={200}
            height={350}
            modeConfig={{
              parallaxScrollingOffset: 50,
              parallaxScrollingScale: 0.9
            }}
            defaultIndex={1}
            style={{
              width: width,
              height: 350,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            mode='parallax'
            />
    </View>
  )
}

export default MainSlideShow