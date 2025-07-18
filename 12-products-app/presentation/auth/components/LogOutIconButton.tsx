import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useAuthStore } from '../store/useAuthStore';

const LogOutIconButton = () => {
  
    const primaryColor = useThemeColor({}, 'primary');
    const { logOut } = useAuthStore();
  
    return (
    <TouchableOpacity>
        <Ionicons name='log-out-outline' onPress={logOut} color={primaryColor} style={{marginRight: 15}} size={24} />
    </TouchableOpacity>
  )
}

export default LogOutIconButton