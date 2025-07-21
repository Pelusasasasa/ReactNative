import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';

interface Props extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap;
}

const ThemeTextInput = ({icon, style, ...rest}: Props) => {

    const primaryColor = useThemeColor({}, 'primary');
    const textColor = useThemeColor({}, 'text');

    const [isActive,setIsActive] = useState<boolean>(false);
    const inputRef = useRef<TextInput>(null)

  return (
    <View
    onTouchStart={() => inputRef.current?.focus()}
    style={[{
        ...styles.border,
        borderColor: isActive ? primaryColor : '#ccc'
        
    }, style]}>

        {icon && (
            <Ionicons
                name={icon}
                size={24}
                color={textColor}
                style={{marginRight: 10}}
            /> 
        )}
        <TextInput
            ref={inputRef}
            placeholderTextColor={textColor}
            onFocus={() => setIsActive(true) }
            onBlur={() => setIsActive(false) }
            style = {{
                color: textColor,
                marginRight: 10,
                flex: 1
            }}
            {...rest}
        />
    </View>
  )
}

export default ThemeTextInput


const styles = StyleSheet.create({

    border: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})