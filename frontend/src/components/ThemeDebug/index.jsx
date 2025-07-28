import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeDebug = () => {
  const { theme, isDark } = useTheme();

  return (
    <div className="fixed bottom-4 left-4 z-50 p-4 card text-xs space-y-2 max-w-xs">
      <h4 className="font-bold theme-text text-sm">🎨 Theme Debug</h4>
      <div className="theme-text-secondary space-y-1">
        <div className="flex justify-between">
          <span>Current:</span>
          <span className="theme-primary font-semibold">{theme}</span>
        </div>
        <div className="flex justify-between">
          <span>isDark:</span>
          <span className={isDark ? 'text-green-500' : 'text-blue-500'}>
            {isDark ? 'true' : 'false'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>data-theme:</span>
          <span className="theme-text-muted">
            {document.documentElement.getAttribute('data-theme') || 'none'}
          </span>
        </div>
      </div>
      <div className="space-y-2 pt-2 border-t theme-border">
        <div className="theme-text-secondary text-xs">Theme Colors:</div>
        <div className="flex space-x-2">
          <div 
            className="w-6 h-6 rounded-md theme-primary-bg border theme-border-light"
            title="Primary"
          ></div>
          <div 
            className="w-6 h-6 rounded-md theme-bg-secondary border theme-border-light"
            title="Background Secondary"
          ></div>
          <div 
            className="w-6 h-6 rounded-md theme-bg border theme-border"
            title="Background"
          ></div>
          <div 
            className="w-6 h-6 rounded-md theme-bg-tertiary border theme-border-light"
            title="Background Tertiary"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDebug;
