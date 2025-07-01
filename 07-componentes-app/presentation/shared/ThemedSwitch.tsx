
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { Platform, View } from 'react-native';
import { Pressable, Switch } from 'react-native-gesture-handler';
import ThemedText from './ThemedText';

interface Props {
    className?: string,
    text?: string,
    value: boolean,

    onValueChange: (value: boolean) => void;
}

const ThemedSwitch = ({className, text, value, onValueChange}: Props) => {

  const isAndroid = Platform.OS === 'android';
  const switchActiveColor = useThemeColor({}, 'primary');

  return (

    <Pressable className={`flex flex-row mx-2 items-center justify-end active:opacity-80 ${className}`}
    onPress={() => onValueChange(!value)}>
        {
            text ? <ThemedText type='h2'>{text}</ThemedText> : <View/>
        }
        <Switch 
          onValueChange={onValueChange} 
          value={value}
          thumbColor={isAndroid ?  switchActiveColor : ''}
          trackColor={{
            false: 'gray',
            true: switchActiveColor
          }}
        
        />
    </Pressable>
  )
}

export default ThemedSwitch