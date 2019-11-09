import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Home';
import Topics from './Topics'
import Quiz from './Quiz';
import Results from './Results';

function App() {
  return (
    <Router>
    <div>
      <Route path="/home" component={Home} />
      <Route path="/topics" component={Topics} />
      <Route path="/quiz" component={Quiz} />
      <Route path='/results' component={Results} />
    </div>
  </Router>
  );
}

export default App;
