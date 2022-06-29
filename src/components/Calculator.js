import '../styles/Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.calculatorHandler = this.calculatorHandler.bind(this);
  }

  calculatorHandler(buttonName) {
    const { total, next, operation } = this.state;
    const newObj = calculate({ total, next, operation }, buttonName);
    this.setState({
      total: newObj.total,
      next: newObj.next,
      operation: newObj.operation,
    });
  }
  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="Grid-container">
        <div className="Result">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" className="Number" id="ac" onClick={() => this.calculatorHandler('AC')}>AC</button>
        <button type="button" className="Number" id="plus-minus" onClick={() => this.calculatorHandler('+/-')}>+/-</button>
        <button type="button" className="Number" id="modul" onClick={() => this.calculatorHandler('%')}>%</button>
        <button type="button" className="Operators" id="div" onClick={() => this.calculatorHandler('÷')}>÷</button>
        <button type="button" className="Number" id="seven" onClick={() => this.calculatorHandler('7')}>7</button>
        <button type="button" className="Number" id="eight" onClick={() => this.calculatorHandler('8')}>8</button>
        <button type="button" className="Number" id="nine" onClick={() => this.calculatorHandler('9')}>9</button>
        <button type="button" className="Operators" id="multi" onClick={() => this.calculatorHandler('x')}>x</button>
        <button type="button" className="Number" id="four" onClick={() => this.calculatorHandler('4')}>4</button>
        <button type="button" className="Number" id="five" onClick={() => this.calculatorHandler('5')}>5</button>
        <button type="button" className="Number" id="six" onClick={() => this.calculatorHandler('6')}>6</button>
        <button type="button" className="Operators" id="minus" onClick={() => this.calculatorHandler('-')}>-</button>
        <button type="button" className="Number" id="one" onClick={() => this.calculatorHandler('1')}>1</button>
        <button type="button" className="Number" id="two" onClick={() => this.calculatorHandler('2')}>2</button>
        <button type="button" className="Number" id="three" onClick={() => this.calculatorHandler('3')}>3</button>
        <button type="button" className="Operators" id="plus" onClick={() => this.calculatorHandler('+')}>+</button>
        <button type="button" className="Number Zero" id="zero" onClick={() => this.calculatorHandler('0')}>0</button>
        <button type="button" className="Number" id="dot" onClick={() => this.calculatorHandler('.')}>.</button>
        <button type="button" className="Operators" id="equal" onClick={() => this.calculatorHandler('=')}>=</button>
      </div>
    );
  }
}

export default Calculator;
