import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../node_modules/modern-normalize/modern-normalize.css';
import './sass/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
