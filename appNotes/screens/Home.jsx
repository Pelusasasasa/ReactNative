import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { homeNoteStyles } from '../styles/homeStyles'

export default function Home({navigation}) {
  return (
    <View style={homeNoteStyles.main}>
      <Text style={homeNoteStyles.title}>Mis Notas</Text>
      <Pressable style={homeNoteStyles.buttonAdd} onPress={() => navigation.navigate('CreateNote')}>
        <Text style={homeNoteStyles.textButtonAdd}>Agregar Nota</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})