import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/styles-global';
import { Pressable, Text } from 'react-native';

import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    color?: string,
    blackText?: boolean,
    dobleSize?: boolean,
    onPress: () => void

}

export default function CalculadoraBoton({
    label, color = Colors.darkGray, blackText = false, dobleSize=false, onPress
}: Props) {
  return (
    <Pressable style={({pressed}) => ({
      ...globalStyles.button,
      backgroundColor: color,
      opacity: pressed ? 0.8 : 1,
      width: dobleSize ? 180 : 80
    })}
    onPress={() => {
      Haptics.selectionAsync()
      onPress();
    }}
    >
        
        <Text style={{
            ...globalStyles.buttonText,
            color: blackText ? 'black' : 'white',
            backgroundColor: color
        }}>{label}</Text>

    </Pressable>
  )
}

