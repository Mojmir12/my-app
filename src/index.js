// src/index.js 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n'; // Importuje i18n pro překlady
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


