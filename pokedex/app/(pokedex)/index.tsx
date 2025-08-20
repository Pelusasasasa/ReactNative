import PokedexList from '@/presentation/pokedex/components/PokedexList'
import { usePokemons } from '@/presentation/pokemons/hooks/usePokemons'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const Index = () => {

  const {loadNextPage, pokemonsQuery  } = usePokemons()

  if(pokemonsQuery.isLoading) return (
    <View className='flex-1, justify-center items-center'>
      <ActivityIndicator size={30} />
    </View>
  )

  return (
    <View className='py-20 w-screen justify-center'>
      <PokedexList pokemones={pokemonsQuery.data?.pages.flatMap(page => page) ?? []} loadNextPage={loadNextPage}/>
    </View>
  )
}

export default Index


