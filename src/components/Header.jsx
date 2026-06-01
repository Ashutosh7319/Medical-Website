import React, { useEffect, useState } from 'react';
import { Moon, Sun, Stethoscope, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">
          <Stethoscope className="logo-accent" size={28} />
          <span>Design<span className="logo-accent">.in</span></span>
        </a>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Chamber</a>
          <a href="#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#booking" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</a>
          
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
