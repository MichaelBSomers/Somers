import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Button from './components/Button'
import Link from './components/Link'

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <div className='flex justify-around items-center p-4 bg-gray-800 text-white'>
          <Link to="/">
            <Button to="/">Home</Button>
          </Link>
          <Link to="/about">
            <Button to="/about">About</Button>
          </Link>
          <Link to="/contact">
            <Button to="/contact">Contact</Button>
          </Link>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
