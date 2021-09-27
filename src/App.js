import React, { useState, useEffect } from 'react';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Skills from './Components/Skills';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    switch(currentPage) {
      case 'Contact': return <Contact />
      case 'Home': return <Home />
      case 'Portfolio': return <Portfolio />
      case 'Resume': return <Resume />
      case 'Skills': return <Skills />
      default: return <Home />
    }
  }

  useEffect(() => {
    document.title = (currentPage === 'Home' ? `M. Travis Russell` : `M. Travis Russell — ${currentPage}`);
 }, [currentPage]);

  return (
    <div class="md:container md:mx-auto">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
