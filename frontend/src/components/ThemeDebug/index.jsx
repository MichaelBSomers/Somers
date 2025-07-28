import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeDebug = () => {
  const { theme, isDark } = useTheme();

  return (
    <div className="fixed bottom-4 left-4 z-50 p-4 card text-xs space-y-2">
      <h4 className="font-bold theme-text">Theme Debug</h4>
      <div className="theme-text-secondary">
        <div>Current: {theme}</div>
        <div>isDark: {isDark ? 'true' : 'false'}</div>
        <div>data-theme: {document.documentElement.getAttribute('data-theme')}</div>
      </div>
      <div className="space-y-1">
        <div className="theme-text">Theme Colors:</div>
        <div className="flex space-x-2">
          <div className="w-4 h-4 theme-primary-bg rounded"></div>
          <div className="w-4 h-4 theme-bg-secondary rounded"></div>
          <div className="w-4 h-4 theme-bg rounded border theme-border"></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDebug;
