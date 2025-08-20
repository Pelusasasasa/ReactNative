import { Pokemon } from '@/core/pokemon/interface/Pokemon'
import { Result } from '@/core/pokemon/interface/PokemonsResponse'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'

interface Props {
    url: Result
};

const initialState = {
    name: ''
}

const PokedexCard = ({url}: Props) => {

    const [pokemon, setPokemon] = useState<Pokemon>(initialState)
    const urlpokemongo = 'https://www.serebii.net/pokemongo/pokemon/'
    const traerDato = async(url: string) => {
        const { data }= await axios.get(url);

        setPokemon(data)
    };

    useEffect(() => {
        traerDato(url.url);
    }, [])

  return (
    <View className='border border-black w-20 h-20'>
        <Image source={{uri: `${urlpokemongo}${`${pokemon.id}`.padStart(3, '0')}.png`}} className='w-10 h-10'/>
        <Text>{pokemon?.id?.toString().padStart(4,'#0000')}</Text>
        <Text>{pokemon.name}</Text>  
    </View>
  )
}

export default PokedexCard