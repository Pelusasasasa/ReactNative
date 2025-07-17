import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';
import { ThemedText } from './ThemedText';

interface Props extends PressableProps {
    icon?: keyof typeof Ionicons.glyphMap,
    children: string;
}

const ThemedButton = ({icon, children, ...rest}: Props) => {

    const bgColor = useThemeColor({}, 'primary')

  return (
    <Pressable
        style={({pressed}) => [
            {
                backgroundColor: pressed ? bgColor + '90' : bgColor 
            },
            styles.button
        ]}
        {...rest}
    >
        <ThemedText style={{color: 'white', fontSize: 20}}>{children}</ThemedText>
        {icon && <Ionicons name={icon} size={24} color='white' style={{marginHorizontal: 5}}/>}
    </Pressable>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})