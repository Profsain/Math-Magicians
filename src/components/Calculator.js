import '../styles/Calculator.css';
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    
    return (
      <div className="Grid-container">
        <div className="Result">0</div>
        <div className="Number">AC</div>
        <div className="Number">+/-</div>
        <div className="Number">%</div>
        <div className="Operators">/</div>
        <div className="Number">7</div>
        <div className="Number">8</div>
        <div className="Number">9</div>
        <div className="Operators">X</div>
        <div className="Number">4</div>
        <div className="Number">5</div>
        <div className="Number">6</div>
        <div className="Operators">-</div>
        <div className="Number">1</div>
        <div className="Number">2</div>
        <div className="Number">3</div>
        <div className="Operators">+</div>
        <div className="Number Zero">0</div>
        <div className="Number">.</div>
        <div className="Operators">=</div>
      </div>
    );
  }
}

export default Calculator;
