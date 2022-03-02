import logo from './logo.svg';
import Home from './components/Home';
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';

//const bootcamp : 'Rookies';

class App extends Component {

  state = {
    bootcamp : 'Rookies'
  }
  render(){
  return (
    <React.Fragment>
      <Navbar></Navbar>
    
    <!-- Remove this -->
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <!-- -->

    <Home Name = {this.state.bootcamp}/> <!-- all props' names should be in camelCase -->
    </React.Fragment>
 
  );
}
}

export default App;
