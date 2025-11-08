import { StrictMode } from 'react';
import React from 'react'
import { createRoot } from 'react-dom/client';
import i18n from './i18n.js';
import { Routes, Route, BrowserRouter } from 'react-router';
import {} from 'react';
import './index.css';
import App from './pages/Home/index.jsx';
import Header from './components/Header/index.jsx';
import Projects from './pages/Projects/index.js';
import Footer from './components/Footer/index.js';
import About from './pages/About/index.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
