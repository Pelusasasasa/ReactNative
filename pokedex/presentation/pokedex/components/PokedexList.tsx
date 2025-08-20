import { Result } from '@/core/pokemon/interface/PokemonsResponse';
import React from 'react';
import { FlatList } from 'react-native';
import PokedexCard from './PokedexCard';

interface Props {
  pokemones: Result[];
  loadNextPage: () => void;
}

const PokedexList = ({pokemones, loadNextPage}: Props) => {
  return (
      <FlatList
      data={pokemones}
      keyExtractor={(item: Result) => item.name}
      numColumns={2}
      renderItem={({item}) => <PokedexCard url={item}/>}
      />
  )
}

export default PokedexList