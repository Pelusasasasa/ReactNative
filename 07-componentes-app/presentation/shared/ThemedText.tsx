import React from 'react';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
    className?: string;
    type?: 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link';
}

const ThemedText = ({children, type, className, ...rest }: Props) => {
  return (
      <Text
        className={[
            
            type === 'h1' ? 'text-3xl' : '',
            type === 'h2' ? 'text-2xl' : '',
            type === 'semi-bold' ? 'font-semibold' : '',
            type === 'link' ? 'font-normal underline' : '',
            className,
            'text-light-text dark:text-dark-text'
        ].join(' ')}
        {...rest}>
        {children}
      </Text>
  )
}

export default ThemedText