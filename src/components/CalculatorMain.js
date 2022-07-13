import React from 'react';
import '../styles/CalculatorMain.css';
import Footer from './Footer';
import Calculator from './Calculator';

const CalculatorMain = () => (
  <div>
    <div className="Calculator-main">
      <div className="Calculator-left">
        <h2 data-testid="headlines">Now let&apos;s do some math!</h2>
        <img src="magic-cal.jpg" alt="The magic boy doing math" />
      </div>
      <div className="Calculator-right">
        <Calculator />
      </div>
    </div>
    <Footer />
  </div>
);

export default CalculatorMain;
