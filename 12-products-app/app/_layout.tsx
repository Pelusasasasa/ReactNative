import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { useColorScheme } from '@/presentation/theme/hooks/useColorScheme';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';

const queryClient = new QueryClient()


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroudColor = useThemeColor({}, 'background');

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    KanitBold: require('../assets/fonts/Kanit-Bold.ttf'),
    KanitRegular: require('../assets/fonts/Kanit-Regular.ttf'),
    KanitThin: require('../assets/fonts/Kanit-Thin.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GestureHandlerRootView style={{backgroundColor: backgroudColor, flex: 1}}>

      <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ 
          headerShown: false,

        }}>
          {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" /> */}
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
