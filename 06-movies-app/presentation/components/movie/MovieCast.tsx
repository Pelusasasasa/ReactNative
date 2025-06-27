import { Cast } from '@/infractructure/interfaces/movie.interfaces'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { ActorCard } from './ActorCard'

interface Props {
    cast: Cast[]
}

const MovieCast = ({ cast }: Props) => {
  return (
   <View className='mt-5 mb-52'>
    <Text className='font-bold text-2xl px-5'>Actores</Text>

        <FlatList
            data={cast}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <ActorCard
                actor={item}
            />}
        />
   </View>
      
  )
}

export default MovieCast