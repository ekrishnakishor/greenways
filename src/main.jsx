import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import this
import App from './App';
import './index.css';
import ScrollToTop from './components/ScrollTop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap App with this */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);