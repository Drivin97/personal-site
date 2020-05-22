import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/customNav';
import Home from './components/home';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <About />
      </div>
    )
  };
}
export default App;
