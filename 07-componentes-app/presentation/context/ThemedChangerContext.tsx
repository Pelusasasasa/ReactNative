import AsyncStorage from "@react-native-async-storage/async-storage";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

interface ThemedChangerContextType {
    currentTheme: 'light' | 'dark';
    isSystemTheme: boolean;

    toggleTheme: () => void;
    setSystemThemed: () => void;
};


const ThemedChangerContext = createContext<ThemedChangerContextType>({} as ThemedChangerContextType);

export const useThemeChangerContext = () => {
    const themeChanger = useContext( ThemedChangerContext );

    return themeChanger;
};


export const ThemedChangerProvider = ({ children }: PropsWithChildren) => {

    const {colorScheme, setColorScheme} = useColorScheme();

    const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
    const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState (true);

    const currentTheme = isSystemThemeEnabled 
    ? colorScheme
    : (isDarkMode ? 'dark' : 'light');


    useEffect(() => {
        AsyncStorage.getItem('selected-theme').then((theme) => {
            if(!theme) return;

            setIsDarkMode( theme === 'dark');
            setIsSystemThemeEnabled( theme === 'system');
            setColorScheme( theme as 'light' | 'dark' | 'system' )
        })
    }, [])

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <ThemedChangerContext.Provider value={{
                currentTheme: 'light',
                isSystemTheme: false,
                toggleTheme: async() => {
                    setIsDarkMode(!isDarkMode);
                    setColorScheme(isDarkMode ? 'light' : 'dark');
                    setIsSystemThemeEnabled(false);

                    await AsyncStorage.setItem('selected-theme', isDarkMode ? 'light' : 'dark')
                },
                setSystemThemed: async() => {
                    setIsSystemThemeEnabled(true);
                    setColorScheme('system');
                    await AsyncStorage.setItem('selected-theme', 'system');
                }
            }}>
                {children}
            </ThemedChangerContext.Provider>
        </ThemeProvider>
    )

}