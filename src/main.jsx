import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; // Import global CSS
import { AuthProvider } from './context/AuthContext'; // Assuming AuthContext is for authentication state
import { BrowserRouter as Router } from 'react-router-dom'; // For routing

// Main entry point for the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrapping the App component with necessary providers like AuthContext and Router
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
