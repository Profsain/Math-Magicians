import React from 'react';
import '../styles/Quote.css';
import HeaderNav from './Header';

export const Quote = () => {
  return (
    <div>
      <HeaderNav />
      <div className="Quote-main">
        <div className="Quote-left">
          <h2>Now is quote time!</h2>
          <img src="magic-quote.jpg" alt="Quote magic boy"/>
        </div>
        <div className="Quote-right">
          <p>
            <q>Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.</q>
            <span><small>— Shakuntala Devi, Indian writer and mental calculator</small></span>
          </p>
        </div>
      </div>
    </div>
  );
}
