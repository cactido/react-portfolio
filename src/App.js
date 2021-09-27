import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div class="md:container md:mx-auto">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pl-2 pr-2 text-gray-100">
        Toot toot
      </main>
    </div>
  );
}

export default App;
