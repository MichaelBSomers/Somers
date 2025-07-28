import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ThemeToggle from './components/ThemeToggle'
import ThemeDebug from './components/ThemeDebug'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <Router>
      <div className="min-h-screen theme-bg transition-all duration-300">
        {/* Navigation */}
        <nav className="theme-bg-secondary backdrop-blur-md theme-border border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold theme-primary">
                  Somers App
                </h1>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link 
                    to="/" 
                    className="px-4 py-2 rounded-lg theme-text hover:theme-primary-bg hover:text-white transition-all duration-200 font-medium"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    className="px-4 py-2 rounded-lg theme-text hover:theme-primary-bg hover:text-white transition-all duration-200 font-medium"
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    className="px-4 py-2 rounded-lg theme-text hover:theme-primary-bg hover:text-white transition-all duration-200 font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              
              {/* Theme Toggle */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="theme-bg-secondary theme-border border-t mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center theme-text-secondary">
              <p>&copy; 2025 Somers App. Built with React, Tailwind CSS, and ❤️</p>
            </div>
          </div>
        </footer>
      </div>
      <ThemeDebug />
    </Router>
    </ThemeProvider>
  )
}

export default App
