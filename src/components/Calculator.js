import '../styles/Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const calculatorHandler = (buttonName) => {
    const newObj = calculate({ total, next, operation }, buttonName);
    setTotal(newObj.total);
    setNext(newObj.next);
    setOperation(newObj.operation);
  };

  return (
    <div className="Grid-container">
      <div className="Result">
        {total}
        {operation}
        {next}
      </div>
      <button type="button" className="Number" id="ac" onClick={() => calculatorHandler('AC')}>AC</button>
      <button type="button" className="Number" id="plus-minus" onClick={() => calculatorHandler('+/-')}>+/-</button>
      <button type="button" className="Number" id="modul" onClick={() => calculatorHandler('%')}>%</button>
      <button type="button" className="Operators" id="div" onClick={() => calculatorHandler('÷')}>÷</button>
      <button type="button" className="Number" id="seven" onClick={() => calculatorHandler('7')}>7</button>
      <button type="button" className="Number" id="eight" onClick={() => calculatorHandler('8')}>8</button>
      <button type="button" className="Number" id="nine" onClick={() => calculatorHandler('9')}>9</button>
      <button type="button" className="Operators" id="multi" onClick={() => calculatorHandler('x')}>x</button>
      <button type="button" className="Number" id="four" onClick={() => calculatorHandler('4')}>4</button>
      <button type="button" className="Number" id="five" onClick={() => calculatorHandler('5')}>5</button>
      <button type="button" className="Number" id="six" onClick={() => calculatorHandler('6')}>6</button>
      <button type="button" className="Operators" id="minus" onClick={() => calculatorHandler('-')}>-</button>
      <button type="button" className="Number" id="one" onClick={() => calculatorHandler('1')}>1</button>
      <button type="button" className="Number" id="two" onClick={() => calculatorHandler('2')}>2</button>
      <button type="button" className="Number" id="three" onClick={() => calculatorHandler('3')}>3</button>
      <button type="button" className="Operators" id="plus" onClick={() => calculatorHandler('+')}>+</button>
      <button type="button" className="Number Zero" id="zero" onClick={() => calculatorHandler('0')}>0</button>
      <button type="button" className="Number" id="dot" onClick={() => calculatorHandler('.')}>.</button>
      <button type="button" className="Operators" id="equal" onClick={() => calculatorHandler('=')}>=</button>
    </div>
  );
}

export default Calculator;
