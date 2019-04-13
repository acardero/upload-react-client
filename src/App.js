import React, { Component } from 'react';
import Home from './Home';
import AddThing from './components/AddThing';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <br />
        <br />
        <br />
        <br />
        <AddThing />
      </div>
    );
  }
}

export default App;
