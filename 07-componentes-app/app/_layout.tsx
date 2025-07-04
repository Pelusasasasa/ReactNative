import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import { allRoutes } from '@/constants/Routes';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedChangerProvider } from '@/presentation/context/ThemedChangerContext';
import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background')
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: backgroundColor }}>
      <ThemedChangerProvider>
        <Stack screenOptions={{
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: backgroundColor
          },
          headerStyle: {
            backgroundColor: backgroundColor
          }
        }}>
          <Stack.Screen name='index' options={{title: ''}}/>
          {
            allRoutes.map(({title, name}) => (
              <Stack.Screen
                key={name}
                name={name}
                options={{
                  title
                }}
              />
            ))
          }
        </Stack>
    </ThemedChangerProvider>
    </GestureHandlerRootView>
  );
}
