import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { createNoteStyles } from '../styles/createNoteStyles';

export default function CreateNote() {

  const [titulo, setTitulo] = useState('');
  const [descorta, setDescorta] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const saveNote = () => {
    Alert.alert('Importante', 'Esto es una prueba')
  };

  return (
    <ScrollView contentContainerStyle={createNoteStyles.scrollContainer}>
      <View style={createNoteStyles.main}>
        <Text style={createNoteStyles.title}>Crear Nota</Text>
        <View style={createNoteStyles.card}>
          <TextInput style={createNoteStyles.input} placeholder='Titulo' placeholderTextColor='slategray' value={titulo} onChangeText={setTitulo}/>
          <TextInput style={createNoteStyles.input} placeholder='Descripcion Corta' placeholderTextColor='slategray' value={descorta} onChangeText={setDescorta}/>
          <TextInput style={createNoteStyles.input} placeholder='Fecha' placeholderTextColor='slategray' value={fecha} onChangeText={setFecha}/>
          <TextInput style={createNoteStyles.input} placeholder='Descripcion' placeholderTextColor='slategray' value={descripcion} onChangeText={setDescripcion}/>

          <Pressable style={createNoteStyles.button} onPress={saveNote}>
            <Text style={createNoteStyles.buttonText}>Registrar Nota</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}