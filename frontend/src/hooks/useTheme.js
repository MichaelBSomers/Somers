import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext.js';

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
