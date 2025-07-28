import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-16 animate-fade-in">
        <h1 className="text-5xl font-bold theme-primary mb-6">
          Welcome to Somers App
        </h1>
        <p className="text-xl theme-text-secondary max-w-2xl mx-auto leading-relaxed">
          A modern React application with beautiful theming, powered by Tailwind CSS and custom design system.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="btn-primary">
            Get Started
          </button>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
        <div className="card">
          <div className="w-12 h-12 theme-primary-bg rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold theme-text mb-2">
            Fast Performance
          </h3>
          <p className="theme-text-secondary">
            Built with modern React and optimized for speed and performance.
          </p>
        </div>

        <div className="card">
          <div className="w-12 h-12 theme-primary-bg rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold theme-text mb-2">
            Responsive Design
          </h3>
          <p className="theme-text-secondary">
            Looks great on all devices with mobile-first responsive design.
          </p>
        </div>

        <div className="card">
          <div className="w-12 h-12 theme-primary-bg rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold theme-text mb-2">
            Dark Mode
          </h3>
          <p className="theme-text-secondary">
            Beautiful dark and light themes with smooth transitions.
          </p>
        </div>
      </div>

      {/* Current Theme Display */}
      <div className="card">
        <h3 className="text-lg font-semibold theme-text mb-2">
          Current Theme: <span className="theme-primary capitalize">{theme}</span>
        </h3>
        <p className="theme-text-secondary">
          Toggle between light and dark themes using the switch in the navigation bar.
        </p>
      </div>
    </div>
  );
};

export default Home;
