import React from 'react';
import '../styles/CalculatorMain.css'
import HeaderNav from './Header';
import Calculator from './Calculator';

export const CalculatorMain = () => {
  return (
    <>
      <HeaderNav />
      <div className="Calculator-main">
        <div className="Calculator-left">
          <h2>Now let's do some math!</h2>
          <img src="magic-cal.jpg" alt="The magic boy doing math" />
        </div>
        <div className="Calculator-right">
          <Calculator />
        </div>
      </div>
    </>
  );
}
