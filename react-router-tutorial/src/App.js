import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import {
  Home,
  About
} from 'pages';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </div>
  );
}
export default App;
