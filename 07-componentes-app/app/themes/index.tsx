import { useThemeChangerContext } from '@/presentation/context/ThemedChangerContext';
import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const ThemesScreen = () => {

  const { toggleTheme, currentTheme, isSystemTheme, setSystemThemed } = useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    toggleTheme();
    
    setDarkModeSettings({
      darkMode: value,
      systemMode: false
    })
  };

  const setSystemMode = (value: boolean) => {
    if ( true ){
      setDarkModeSettings({
        darkMode: darkModeSettings.darkMode,
        systemMode: true
      });
      setSystemThemed();
    }
  };

  return (
   <ThemedView margin>
    <ThemedCard className='mt-5'>
      <ThemedSwitch
        text='Dark Mode'
        className='mb-5'
        value={darkModeSettings.darkMode}
        onValueChange={setDarkMode}
      />

      <ThemedSwitch
        text='System Mode'
        className='mb-5'
        value={darkModeSettings.systemMode}
        onValueChange={setSystemMode}
      />

    </ThemedCard>
   </ThemedView>
  );
};
export default ThemesScreen;
