import React from 'react';
import './App.css';
import HeaderNav from './components/Header';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
