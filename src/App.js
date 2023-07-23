import './App.css';
import Navv from './components/Navbar';
import React from 'react';
import Bann from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
    <Navv></Navv>
    <Bann/>
    <Skill/>
    </div>
  );
}

export default App;
