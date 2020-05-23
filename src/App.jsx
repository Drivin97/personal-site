import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/customNav';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
      </div>
    )
  };
}
export default App;
