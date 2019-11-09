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

function App() {
  return (
    <Router>
    <div>
      <Route path="/home" component={Home} />
      <Route path="/topics" component={Topics} />
      <Route path="/quiz" component={Quiz} />
    </div>
  </Router>
  );
}

export default App;
