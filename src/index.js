import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CalculatorMain from './components/CalculatorMain';
import Quote from './components/Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/calculator" element={<CalculatorMain />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>,
);
