import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingPanel from './components/BookingPanel';
import DesignerCredit from './components/DesignerCredit';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BookingPanel />
        <DesignerCredit />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Design.in Chamber. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
