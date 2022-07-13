import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/Quote';
import CalculatorMain from './components/CalculatorMain';
import HeaderNav from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorMain />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
