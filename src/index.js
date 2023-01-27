// Packages Imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// React App Import
import App from './components/App';

// Styling Imports
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
