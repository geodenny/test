// context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import { useColorScheme } from 'nativewind';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('system'); // 'light', 'dark', 'system'
  const {colorScheme,setColorScheme}=useColorScheme()

//   const colorScheme = Appearance.getColorScheme();
  const effectiveTheme =
    theme === 'system' ? colorScheme : theme;

  useEffect(() => {
    AsyncStorage.getItem('user-theme').then(saved => {
      if (saved) setTheme(saved);
    });
  }, []);

  const toggleTheme = (value) => {
    setTheme(value);
    AsyncStorage.setItem('user-theme', value);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, effectiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
