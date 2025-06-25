import { Movie } from '@/infractructure/interfaces/movie.interfaces';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
    title?: string;
}

const MovieHorizontalList = ({title, movies}: Props) => {
  return (
    <View>
      {title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster/>}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default MovieHorizontalList