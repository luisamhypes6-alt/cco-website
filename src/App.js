import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Insights from './pages/Insights';
import Documentation from './pages/Documentation';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import { BookingProvider } from './components/BookingGate';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  // navigation will be handled by react-router-dom routes

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BookingProvider>
      <div data-theme={theme}>
        <Navbar />
        <main className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </BookingProvider>
    </ThemeContext.Provider>
  );
}

export default App;