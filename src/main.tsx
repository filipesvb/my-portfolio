import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "./i18n.js";
import { Routes, Route, BrowserRouter } from "react-router";
import {} from "react";
import "./index.css";
import App from "./pages/Home/index.jsx";
import Header from "./components/Header/index.jsx";
import Projects from "./pages/Projects/index.js";
import Footer from "./components/Footer/index.js";
import About from "./pages/About/index.js";
import { ThemeProvider } from "./contexts/ThemeContext.js";
import ScrollAwareMenuButton from "./components/ScrollAwareMenuButton.js";
import Contact from "./pages/Contact/index.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <div className="">
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
        <ScrollAwareMenuButton />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
