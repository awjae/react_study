import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
import EvenPractice from './EventPractice'
import IterationSample from './IterationSample'
import Hello from './functionalComponent'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //<MyComponent name="React"></MyComponent>
    //<EvenPractice/>
    //<IterationSample></IterationSample>
    <Hello></Hello>
  );
}

export default App;
