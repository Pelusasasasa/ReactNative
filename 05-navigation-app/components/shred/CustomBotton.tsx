import React from 'react'
import { Pressable, Text } from 'react-native'

interface Props {
    color?: 'primary' | 'secondary' | 'tertiary'
    children: string,
    onPress?: () => void,
    onLongPress?: () => void,

    variant?: 'text-only' | 'contained',
    className?: string
}

const CustomBotton = ({children, className,  color = 'primary', onPress, onLongPress, variant='contained'}: Props) => {
    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
    }[color];

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
    }[color];

    if(variant === 'text-only') return (
        <Pressable
            className={`p-3 rounded-md  ${className}`}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text className={`${textColor} text-center font-work-medium`}>{children}</Text>
        </Pressable>
    )

  return (
    <Pressable 
    className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
    >
      <Text className='text-white text-center font-work-medium'>{children}</Text>
    </Pressable>
  )
}

export default CustomBotton