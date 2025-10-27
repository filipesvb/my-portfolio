import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import i18n from './i18n.js';
import { Routes, Route, BrowserRouter } from 'react-router';
import {} from 'react';
import './index.css';
import App from './pages/Home/index.jsx';
import Header from './components/Header/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
