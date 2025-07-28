# Somers Full-Stack Application

A modern full-stack web application built with React, Express.js, MongoDB, and Tailwind CSS featuring a sophisticated theming system with light/dark mode support.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/MichaelBSomers/Somers.git
cd Somers

# Start backend server
./start-backend.sh

# In a new terminal, start frontend
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5175` to see the application.

## 📁 Project Structure

```
Somers/
├── README.md                 # This file
├── start-backend.sh         # Backend startup script
├── backend/                 # Express.js server
│   ├── package.json
│   ├── server.js           # Main server file
│   ├── config/
│   │   └── database.js     # MongoDB connection
│   └── models/
│       └── User.js         # User model (Mongoose)
└── frontend/               # React application
    ├── package.json
    ├── vite.config.js      # Vite configuration
    ├── index.html          # Entry HTML
    ├── eslint.config.js    # ESLint configuration
    ├── public/
    │   └── vite.svg        # Public assets
    └── src/
        ├── main.jsx        # React entry point
        ├── App.jsx         # Main App component
        ├── App.css         # App-specific styles
        ├── index.css       # Global styles & theming
        ├── components/     # Reusable components
        │   ├── Button/
        │   ├── Link/
        │   ├── ThemeToggle/    # Theme switcher
        │   └── ThemeDebug/     # Development tool
        ├── contexts/       # React contexts
        │   ├── ThemeContext.jsx    # Theme provider
        │   └── themeContext.js     # Theme context definition
        ├── hooks/          # Custom React hooks
        │   └── useTheme.js # Theme management hook
        ├── pages/          # Page components
        │   ├── Home/
        │   ├── About/
        │   └── Contact/
        └── assets/         # Static assets
            └── react.svg
```

## 🛠️ Technology Stack

### **Frontend**
- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.6** - Lightning-fast build tool and dev server
- **React Router Dom 7.7.1** - Client-side routing
- **Tailwind CSS v4.1.11** - Utility-first CSS framework with latest features
- **@tailwindcss/vite** - Vite plugin for Tailwind CSS integration

### **Backend**
- **Node.js 24.4.1** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB Atlas** - Cloud-hosted NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### **Development Tools**
- **ESLint** - Code linting and quality
- **Hot Module Replacement (HMR)** - Instant development feedback
- **VS Code** - Recommended IDE with extensions

## ⚙️ Configuration Details

### **Backend Configuration**

#### Environment Variables
Create a `.env` file in the `backend/` directory:
```env
PORT=3001
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
NODE_ENV=development
```

#### Server Features
- **Port**: 3001 (configurable via environment)
- **CORS**: Enabled for frontend development
- **Health Check**: `/health` endpoint for monitoring
- **API Routes**: RESTful API structure ready for expansion
- **Graceful Shutdown**: Proper cleanup on process termination

#### Database Connection
- **MongoDB Atlas**: Cloud-hosted database
- **Connection Pooling**: Optimized for performance
- **Error Handling**: Robust connection error management
- **Auto-reconnection**: Built-in reconnection logic

### **Frontend Configuration**

#### Vite Configuration (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 5175, // Development server port
    open: true  // Auto-open browser
  }
})
```

#### ESLint Configuration
- **React Hooks Rules**: Enforces React best practices
- **React Refresh**: Hot reload support
- **Modern JavaScript**: ES2022+ syntax support

## 🎨 Theming System

### **Architecture Overview**
The application features a sophisticated theming system built with CSS variables and React Context:

#### Theme Context Structure
```
ThemeProvider (ThemeContext.jsx)
├── Theme State Management
├── localStorage Persistence
├── System Preference Detection
└── data-theme Attribute Management

useTheme Hook (useTheme.js)
├── Context Consumer
├── Theme Toggle Function
├── Theme State Access
└── Error Boundary
```

### **CSS Variables Architecture**

#### Light Theme Colors
```css
:root {
  /* Primary Colors - Blue Palette */
  --primary-500: #3b82f6;    /* Main brand color */
  --primary-400: #60a5fa;    /* Lighter variant */
  --primary-600: #2563eb;    /* Darker variant */
  
  /* Background Hierarchy */
  --theme-bg: #ffffff;              /* Main background */
  --theme-bg-secondary: #f9fafb;    /* Card backgrounds */
  --theme-bg-tertiary: #f3f4f6;     /* Elevated surfaces */
  
  /* Text Hierarchy */
  --theme-text: #111827;            /* Primary text */
  --theme-text-secondary: #4b5563;  /* Secondary text */
  --theme-text-muted: #6b7280;      /* Muted text */
  
  /* Interactive Elements */
  --theme-border: #e5e7eb;          /* Borders */
  --theme-primary-bg: #3b82f6;      /* Primary buttons */
}
```

#### Dark Theme Colors
```css
[data-theme="dark"] {
  /* Adjusted for dark backgrounds */
  --theme-primary: #60a5fa;         /* Brighter for contrast */
  
  /* Dark Background Hierarchy */
  --theme-bg: #0f172a;              /* Deep navy */
  --theme-bg-secondary: #1e293b;    /* Slate cards */
  --theme-bg-tertiary: #334155;     /* Elevated surfaces */
  
  /* Light Text for Dark Backgrounds */
  --theme-text: #f1f5f9;            /* High contrast text */
  --theme-text-secondary: #cbd5e1;  /* Readable secondary */
  --theme-text-muted: #94a3b8;      /* Subtle text */
  
  /* Dark Mode Borders */
  --theme-border: #334155;          /* Subtle borders */
}
```

### **Theme Components**

#### Custom CSS Classes
```css
/* Utility Classes */
.theme-bg { background-color: var(--theme-bg); }
.theme-text { color: var(--theme-text); }
.theme-primary { color: var(--theme-primary); }

/* Component Classes */
.btn-primary {
  background-color: var(--theme-primary-bg);
  color: white;
  /* Hover effects, shadows, transitions */
}

.card {
  background-color: var(--theme-bg-secondary);
  border: 1px solid var(--theme-border);
  /* Shadow, border-radius, padding */
}
```

### **Theme Toggle Implementation**

#### ThemeToggle Component Features
- **Visual Indicator**: Switch-style toggle with smooth animations
- **Accessibility**: ARIA labels and keyboard navigation
- **Icons**: Sun/moon icons for visual context
- **Smooth Transitions**: 300ms duration for all theme changes

#### Theme Persistence
- **localStorage**: Saves user preference
- **System Detection**: Respects `prefers-color-scheme`
- **SSR Safe**: Prevents hydration mismatches

## 🧩 Component Architecture

### **Layout Components**

#### App.jsx - Main Application
```jsx
<ThemeProvider>          // Theme context wrapper
  <Router>               // React Router for navigation
    <Navigation />       // Sticky header with theme toggle
    <Main>               // Page content area
      <Routes />         // Dynamic page routing
    </Main>
    <Footer />           // Application footer
    <ThemeDebug />       // Development helper (removable)
  </Router>
</ThemeProvider>
```

#### Navigation Features
- **Responsive Design**: Mobile-first approach
- **Theme Integration**: Uses theme CSS classes
- **Active States**: Visual feedback for current page
- **Accessibility**: Semantic HTML and ARIA attributes

### **Page Components**

#### Home Page (`pages/Home/index.jsx`)
- **Hero Section**: Welcome message with call-to-action buttons
- **Feature Grid**: Three-column responsive layout
- **Theme Display**: Shows current theme state
- **Animations**: Fade-in and slide-up animations

#### About & Contact Pages
- **Consistent Layout**: Matches design system
- **Theme Responsive**: Adapts to light/dark themes
- **Card Layout**: Uses reusable card component

### **Development Tools**

#### ThemeDebug Component
```jsx
// Three states: Hidden, Collapsed, Expanded
const ThemeDebug = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Shows theme state, CSS variables, color swatches
  // Helps debug theming issues during development
};
```

**Features:**
- **Theme State Monitoring**: Real-time theme information
- **CSS Variable Display**: Visual color swatches
- **Toggle States**: Hide/show/expand functionality
- **Development Helper**: Easy to remove for production

## 🔧 Development Workflow

### **Starting Development**

1. **Backend Setup**
```bash
# Start MongoDB connection and Express server
./start-backend.sh

# Verify backend is running
curl http://localhost:3001/health
```

2. **Frontend Setup**
```bash
cd frontend
npm install              # Install dependencies
npm run dev             # Start development server
```

3. **Development URLs**
- **Frontend**: http://localhost:5175
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/health

### **Hot Module Replacement (HMR)**
Vite provides instant feedback for:
- **React Components**: Preserves component state
- **CSS Changes**: Instant style updates
- **Theme Modifications**: Real-time theme changes
- **Hook Updates**: Context and state preservation

### **Theme Development**
1. **Modify CSS Variables** in `src/index.css`
2. **Test Theme Toggle** using the navigation switch
3. **Use ThemeDebug** component to verify changes
4. **Check Both Modes** (light and dark)

### **Adding New Components**
```bash
# Create component directory
mkdir src/components/NewComponent

# Create component file
touch src/components/NewComponent/index.jsx

# Follow theming conventions
# Use theme CSS classes (.theme-*, .card, .btn-primary)
# Implement responsive design
# Add proper accessibility attributes
```

## 📦 Package Management

### **Frontend Dependencies**
```json
{
  "dependencies": {
    "react": "^19.1.0",                    // Core React
    "react-dom": "^19.1.0",                // React DOM rendering
    "react-router-dom": "^7.7.1"           // Client-side routing
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.11",        // Tailwind CSS integration
    "@vitejs/plugin-react": "^5.1.1",      // React support for Vite
    "eslint": "^9.15.0",                   // Code linting
    "vite": "^7.0.6"                       // Build tool and dev server
  }
}
```

### **Backend Dependencies**
```json
{
  "dependencies": {
    "express": "^4.18.2",                  // Web framework
    "mongoose": "^7.5.0",                  // MongoDB ODM
    "cors": "^2.8.5",                      // CORS middleware
    "dotenv": "^16.3.1"                    // Environment variables
  }
}
```

## 🚀 Production Deployment

### **Frontend Build**
```bash
cd frontend
npm run build               # Creates dist/ directory
npm run preview            # Preview production build locally
```

### **Backend Production**
```bash
cd backend
NODE_ENV=production node server.js
```

### **Environment Variables**
```env
# Production environment
NODE_ENV=production
PORT=3001
MONGODB_URI=mongodb+srv://prod-user:password@cluster.mongodb.net/prod-db
```

### **Deployment Checklist**
- [ ] Remove ThemeDebug component
- [ ] Set production environment variables
- [ ] Configure CORS for production domains
- [ ] Enable HTTPS
- [ ] Set up database backups
- [ ] Configure error logging
- [ ] Optimize bundle size
- [ ] Enable gzip compression

## 🛡️ Security Considerations

### **Backend Security**
- **Environment Variables**: Sensitive data in .env files
- **CORS Configuration**: Restricted to allowed origins
- **Input Validation**: Mongoose schema validation
- **Error Handling**: No sensitive data in error responses

### **Frontend Security**
- **No Sensitive Data**: All API keys server-side
- **Secure Routing**: Protected routes implementation ready
- **XSS Prevention**: React's built-in protection
- **Content Security Policy**: Ready for implementation

## 🧪 Testing Strategy

### **Frontend Testing** (Ready for implementation)
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react vitest

# Test structure
src/
├── __tests__/              # Test files
├── components/
│   └── Button/
│       ├── index.jsx
│       └── Button.test.jsx # Component tests
```

### **Backend Testing** (Ready for implementation)
```bash
# Install testing dependencies
npm install --save-dev jest supertest

# Test structure
backend/
├── __tests__/              # Test files
├── routes/
└── models/
```

## 📊 Performance Optimizations

### **Frontend Performance**
- **Vite Build Optimization**: Tree shaking and minification
- **React Optimization**: Component memoization ready
- **Lazy Loading**: Route-based code splitting ready
- **CSS Optimization**: Tailwind CSS purging enabled

### **Backend Performance**
- **MongoDB Indexing**: Database optimization ready
- **Caching Strategy**: Redis integration ready
- **Compression**: Gzip middleware ready
- **Rate Limiting**: Express rate limiting ready

## 🔧 Troubleshooting

### **Common Issues**

#### Theme Not Switching
1. Check ThemeDebug component shows correct `data-theme` attribute
2. Verify CSS variables are properly defined in `index.css`
3. Ensure ThemeProvider wraps the entire app
4. Check browser developer tools for CSS variable values

#### Backend Connection Issues
1. Verify MongoDB connection string in `.env`
2. Check network connectivity to MongoDB Atlas
3. Verify backend server is running on correct port
4. Check CORS configuration for frontend domain

#### Build Issues
1. Clear `node_modules` and reinstall dependencies
2. Check Node.js version compatibility (24.4.1 recommended)
3. Verify all import paths are correct
4. Check for ESLint errors

### **Development Tips**
- Use ThemeDebug component to monitor theme state
- Check browser console for errors
- Use React Developer Tools for component debugging
- Monitor network tab for API requests
- Use Vite's error overlay for build issues

## 📚 Additional Resources

### **Documentation Links**
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [React Router v7](https://reactrouter.com/)
- [Express.js](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Heroicons](https://heroicons.com/) - Icon library used

### **VS Code Extensions**
Recommended extensions for optimal development experience:
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **GitLens**
- **Thunder Client** (API testing)

---

## 👥 Contributing

This application follows modern React and Express.js best practices. When contributing:

1. Follow the established file structure
2. Use the theming system consistently
3. Maintain responsive design principles
4. Add proper accessibility attributes
5. Test in both light and dark themes
6. Update documentation for new features

---

**Built with ❤️ using React, Express.js, MongoDB, and Tailwind CSS**
