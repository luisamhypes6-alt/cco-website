import React, { useState, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Insights from './pages/Insights';
import Documentation from './pages/Documentation';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');
  const [page, setPage] = useState('home');

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = { home: Home, about: About, insights: Insights, documentation: Documentation, careers: Careers, contact: Contact };
  const PageComponent = pages[page] || Home;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, navigate, page }}>
      <div data-theme={theme}>
        <Navbar />
        <main className="page">
          <PageComponent />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { useContext };
