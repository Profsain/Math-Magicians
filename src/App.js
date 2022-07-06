import React from 'react';
import HeaderNav from './components/Header';
import Home from './components/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
