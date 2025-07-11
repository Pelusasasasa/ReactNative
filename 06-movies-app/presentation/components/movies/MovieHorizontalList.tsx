import { Movie } from '@/infractructure/interfaces/movie.interfaces';
import React, { useEffect, useRef } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
    title?: string;

    loadNextPage?: () => void;
}

const MovieHorizontalList = ({title, movies, loadNextPage}: Props) => {

  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200)
  }, [movies])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const {contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

    if(!isEndReached) return;

    isLoading.current = true;

    console.log('Llegoadno al final');
    loadNextPage && loadNextPage();
  }

  return (
    <View>
      {title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster/>}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        />
    </View>
  )
}

export default MovieHorizontalList