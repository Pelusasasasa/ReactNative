import CustomDrawer from '@/components/shared/CustomDrawer'
import { Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import React from 'react'

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        drawerActiveTintColor: 'indigo',
      }}
    >
    <Drawer.Screen
      name="user/index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: 'User',
        drawerIcon: ({color, size}) => <Ionicons name='person-circle-outline' size={size} color={color}/>,
        title: 'Usuario',
      }}
    />
    <Drawer.Screen
      name="schedule/index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: 'Horario',
        drawerIcon: ({color, size}) => <Ionicons name='calendar-outline' size={size} color={color}/>,
        title: 'Horarios',
      }}
    />
  </Drawer>
  )
}

export default DrawerLayout