import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="App">
        <h1 className="Headline">The Math Magicians</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
