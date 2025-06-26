import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainSlideShow from '@/presentation/components/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';



const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } = useMovies();

    if(nowPlayingQuery.isLoading){
      return (
        <View className='flex-1 justify-center items-center'>
          <ActivityIndicator color='purple' size={50}/>
        </View>
      )    
    }

  return (
   <ScrollView>
     <View className='mt-2 pb-10' style={{paddingTop: safeArea.top}}>
      <Text className='text-3xl font-bold p-4 mb-2'>Movies App</Text>


      <MainSlideShow movies={nowPlayingQuery.data ?? []}/>

      <MovieHorizontalList movies={popularQuery.data ?? []} title='Populares'/>

      <MovieHorizontalList 
        movies={topRatedQuery.data?.pages.flat() ?? []} 
        title='Mejor Clasificadas'
        loadNextPage={topRatedQuery.fetchNextPage}
        />

      <MovieHorizontalList movies={upcomingQuery.data ?? []} title='Proximamente en Cines'/>
    </View>
   </ScrollView>
  )

}

export default HomeScreen