import { Alert, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { createNoteStyles } from '../styles/createNoteStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function CreateNote() {

  const [titulo, setTitulo] = useState('');
  const [descorta, setDescorta] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [showDateSpiker, setShowDateSpiker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDateSpikerHandle = () => {
    setShowDateSpiker(true);
  };

  const onDatechange = (event, date) => {
    setShowDateSpiker(Platform.OS === 'ios');
    if(event.type !== 'dismissed' && date){
      setSelectedDate(date);
      setFecha(date.toLocaleDateString('es-ES'));
    }
  };

  const saveNote = async() => {

    if(!titulo || !descorta || !fecha || !descripcion){
      Alert.alert('Error', 'Llenar todos los campos');
      return;
    }


    try {
      const newNote = {
        id: Date.now().toString(),
        titulo,
        descorta,
        fecha,
        descripcion
      };

      const storeNotes = await  AsyncStorage.getItem('notas');
      const notes  = storeNotes ? JSON.parse(storeNotes) : [];

      notes.push(newNote);

      await AsyncStorage.setItem('notas', JSON.stringify(notes));

      //Limiar los campos
      setTitulo('');
      setDescorta('');
      setFecha('');
      setDescripcion('');
      
    } catch (error) {
      console.log(`Error alguardar la nota ${error}`);
      Alert.alert('Error', 'Error alguardar')
    };
  };

  return (
    <ScrollView contentContainerStyle={createNoteStyles.scrollContainer}>
      <View style={createNoteStyles.main}>
        <Text style={createNoteStyles.title}>Crear Nota</Text>
        <View style={createNoteStyles.card}>
          <TextInput style={createNoteStyles.input} placeholder='Titulo' placeholderTextColor='slategray' value={titulo} onChangeText={setTitulo}/>
          <TextInput style={createNoteStyles.input} placeholder='Descripcion Corta' placeholderTextColor='slategray' value={descorta} onChangeText={setDescorta}/>
  
          <Pressable onPress={showDateSpikerHandle} style={createNoteStyles.input}>
            <TextInput placeholder='Fecha' placeholderTextColor='slategray' value={fecha} onChangeText={setFecha} editable={false} style={{marginTop: 10}}/>
          </Pressable>
          {
            showDateSpiker && (
              <DateTimePicker
                value={selectedDate}
                mode='date'
                onChange={onDatechange}
                minimumDate={new Date()}
                display='default'
              />
            )
          }

          <TextInput style={createNoteStyles.input} placeholder='Descripcion' placeholderTextColor='slategray' value={descripcion} onChangeText={setDescripcion}/>

          <Pressable style={createNoteStyles.button} onPress={saveNote}>
            <Text style={createNoteStyles.buttonText}>Registrar Nota</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}