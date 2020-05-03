import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import {
  Home,
  About
} from 'pages';
import Menu from 'components/Menu';

const App = () => {
  return (
    <div>
      <Menu />
      <Route exact path="/" component={Home}></Route>
      {/* <Route path="/about" component={About}></Route> */}
      <Route path="/about/:name?" component={About}></Route>
    </div>
  );
}
export default App;
