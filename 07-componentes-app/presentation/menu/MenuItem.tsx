import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { Href, router } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';
import ThemedText from '../shared/ThemedText';

interface Props {
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    name: string;

    isFirst?: boolean;
    isLast?: boolean;
}

const MenuItem = ({title, icon, name, isFirst = false, isLast = false}: Props) => {

    const [routeName] = name.split('/');
    const primaryColor = useThemeColor({}, 'primary')

  return (
    <Pressable onPress={() => router.push(routeName as Href)}
        className='bg-white dark:bg-black/15 mx-5 py-2'
        style={{
            ...(isFirst) && {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingTop: 10
            },
            ...(isLast) && {
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                paddingBottom: 10
            },
        }}
    >
        <View className='flex-row items-center'>
            <Ionicons color={primaryColor} size={30} name={icon} className='mr-5'/>
            <ThemedText type='normal'>{title}</ThemedText>
        </View>
    </Pressable>
  )
}

export default MenuItem