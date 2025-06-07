import CalculadoraBoton from '@/components/CalculadoraBoton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import { useCalculadora } from '@/hooks/useCalculadora'
import { globalStyles } from '@/styles/styles-global'
import React from 'react'
import { View } from 'react-native'

export default function CalculadoraApp() {

      const {formula, previoNumber, buildNumber, clean, deleteLast, divideOperation, addOperation, multiplyOperation, subtractOperation, toggleSign, calculateSubResult, calculateResult } = useCalculadora()

  return (
    <View style={globalStyles.calculadoraContainer}>
      <View style={{marginHorizontal: 30, marginBottom: 20}}>
        <ThemeText variant='h1'>{formula}</ThemeText>

        {
            formula === previoNumber ? (
                  <ThemeText variant='h2'> </ThemeText>
            ) : (
                  <ThemeText variant='h2'>{ previoNumber }</ThemeText>
            )
        }
      </View>
      
      {/* Filas de botones */}
      <View style={globalStyles.row}>
            <CalculadoraBoton color={Colors.lightGray} label='C' onPress={clean} blackText/>
            <CalculadoraBoton color={Colors.lightGray} label='+/-' onPress={toggleSign} blackText/>
            <CalculadoraBoton color={Colors.lightGray} label='del' onPress={deleteLast} blackText/>
            <CalculadoraBoton color={Colors.orange} label='/' onPress={divideOperation} />
      </View>
      <View style={globalStyles.row}>
            <CalculadoraBoton label='7' onPress={() => buildNumber('7')} />
            <CalculadoraBoton label='8' onPress={() => buildNumber('8')} />
            <CalculadoraBoton label='9' onPress={() => buildNumber('9')} />
            <CalculadoraBoton color={Colors.orange} label='*' onPress={multiplyOperation} />
      </View>
      <View style={globalStyles.row}>
            <CalculadoraBoton label='4' onPress={() => buildNumber('4')} />
            <CalculadoraBoton label='5' onPress={() => buildNumber('5')} />
            <CalculadoraBoton label='6' onPress={() => buildNumber('6')} />
            <CalculadoraBoton color={Colors.orange} label='-' onPress={subtractOperation} />
      </View>
      <View style={globalStyles.row}>
            <CalculadoraBoton label='1' onPress={() => buildNumber('1')} />
            <CalculadoraBoton label='2' onPress={() => buildNumber('2')} />
            <CalculadoraBoton label='3' onPress={() => buildNumber('3')} />
            <CalculadoraBoton color={Colors.orange} label='+' onPress={addOperation} />
      </View>
      <View style={globalStyles.row}>
            <CalculadoraBoton label='0' dobleSize onPress={() => buildNumber('0')} />
            <CalculadoraBoton label='.' onPress={() => buildNumber('.')} />
            <CalculadoraBoton color={Colors.orange} label='=' onPress={calculateResult} />
      </View>

    </View>
  )
}
