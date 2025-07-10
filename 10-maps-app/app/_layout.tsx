import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/presentation/hooks/useColorScheme';
import PermissionCheckerProvider from '@/presentation/provider/PermissionCheckerProvider';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

    useEffect(() => {
      if(loaded){
        SplashScreen.hideAsync();
      }
    }, [loaded])

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PermissionCheckerProvider>
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name='loading/index' options={{ animation: 'none'}}/>
          <Stack.Screen name='map/index' options={{ animation: 'fade'}}/>
          <Stack.Screen name='permission/index' options={{ animation: 'fade'}}/>
          
        </Stack>
        <StatusBar style="auto" />
      </PermissionCheckerProvider>
    </ThemeProvider>
  );
}
