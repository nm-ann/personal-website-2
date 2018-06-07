import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
