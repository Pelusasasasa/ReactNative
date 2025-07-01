import React from 'react'
import { TextInputProps } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
interface Props extends TextInputProps {
    className?: string
}
const ThemedInputText = ({className, ...rest}: Props) => {
  return (
    <TextInput
        className='py-4 px-2 text-black dark:text-white'
        placeholderTextColor="grey"
        {...rest}
    />
  )
}

export default ThemedInputText