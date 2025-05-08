import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { homeNoteStyles } from '../styles/homeStyles'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  const [notas, setNotas] = useState([]);

  const loadNotas = async() => {
      try {
        const storagedNotes = await AsyncStorage.getItem('notas');
        const parseNotes = storagedNotes ? JSON.parse(storagedNotes) : [];
        setNotas(parseNotes);
      } catch (error) {
        console.log(error);
        
      }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadNotas);
    return unsubscribe;
  }, [navigation]);

  const renderNote = ({item}) => (
    <View style={homeNoteStyles.noteCard}>
      <Text style={homeNoteStyles.noteTitle}>{item.titulo}</Text>
      <Text style={homeNoteStyles.nodeDate}>{item.fecha}</Text>
      <Text style={homeNoteStyles.noteShortDes}>{item.descorta}</Text>
    </View>
  )

  return (
    <View style={homeNoteStyles.main}>
      <Text style={homeNoteStyles.title}>Mis Notas</Text>
      <Pressable style={homeNoteStyles.buttonAdd} onPress={() => navigation.navigate('CreateNote')}>
        <Text style={homeNoteStyles.textButtonAdd}>Agregar Nota</Text>
      </Pressable>

      <FlatList
        data={notas}
        keyExtractor={elem => elem.id}
        renderItem={renderNote}
        contentContainerStyle={homeNoteStyles.listContainer}
      />


    </View>
  )
}

const styles = StyleSheet.create({})