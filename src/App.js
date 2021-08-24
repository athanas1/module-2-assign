import React, { Component } from 'react';
import './App.css';
import Countries from './components/Countries';

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          Olympics WOW VERY COOL
        </header>
        <Countries />
      </div>
     );
  }
}
 
export default App;
