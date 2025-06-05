import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

if (sessionStorage.redirect) {
  const redirectPath = sessionStorage.redirect;
  delete sessionStorage.redirect;
  window.history.replaceState(null, null, redirectPath);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
