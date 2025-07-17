import { Link, LinkProps } from 'expo-router'
import React from 'react'
import { useThemeColor } from '../hooks/useThemeColor'

const ThemedLink = ({style, ...rest}: LinkProps) => {

    const colorPrimary = useThemeColor({}, 'primary')

  return (
    <Link style={[
        {color: colorPrimary},
        style

    ]}
    {...rest}
    />
  )
}

export default ThemedLink