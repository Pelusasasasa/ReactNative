import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backGroundColor = useThemeColor({}, 'background')
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: backGroundColor
        }
      }}>
        <Stack.Screen
        name='index'
        options={{
          title: 'Push App',
        }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
