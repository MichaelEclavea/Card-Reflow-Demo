import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeIcons } from '@fluentui/react';
import App from './App';
import './index.css';

initializeIcons();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

