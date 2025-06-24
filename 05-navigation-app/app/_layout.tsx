import { useFonts } from 'expo-font'
import { Slot, SplashScreen } from 'expo-router'
import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import './global.css'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    });

    useEffect(() => {
      if(error) throw error;

      if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])
    
    if(!fontsLoaded && !error) return null
    // return <Slot/>
    return (

      <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot />
      </GestureHandlerRootView>
        
    )
}

export default RootLayout