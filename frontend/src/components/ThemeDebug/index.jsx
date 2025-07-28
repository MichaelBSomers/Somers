import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeDebug = () => {
  const { theme, isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 p-2 rounded-full theme-primary-bg text-white shadow-lg hover:scale-110 transition-all duration-200"
        title="Show Theme Debug"
      >
        🎨
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-2">
      {/* Collapsed view */}
      {!isExpanded && (
        <div className="card p-3 flex items-center justify-between space-x-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm">🎨</span>
            <span className="theme-text text-sm font-medium">{theme}</span>
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => setIsExpanded(true)}
              className="p-1 rounded theme-bg-tertiary hover:theme-primary-bg hover:text-white transition-all duration-200"
              title="Expand debug panel"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 rounded theme-bg-tertiary hover:bg-red-500 hover:text-white transition-all duration-200"
              title="Hide debug panel"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Expanded view */}
      {isExpanded && (
        <div className="card p-4 text-xs space-y-3 max-w-xs">
          <div className="flex items-center justify-between">
            <h4 className="font-bold theme-text text-sm flex items-center space-x-2">
              <span>🎨</span>
              <span>Theme Debug</span>
            </h4>
            <div className="flex space-x-1">
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 rounded theme-bg-tertiary hover:theme-primary-bg hover:text-white transition-all duration-200"
                title="Collapse debug panel"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 rounded theme-bg-tertiary hover:bg-red-500 hover:text-white transition-all duration-200"
                title="Hide debug panel"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="theme-text-secondary space-y-2">
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
      )}
    </div>
  );
};

export default ThemeDebug;
