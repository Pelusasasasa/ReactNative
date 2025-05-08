import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

export default function App() {

  const stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="home"/>
        <Stack.Screen  name="Profile"/>
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
    
  );
}

