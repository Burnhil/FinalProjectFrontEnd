import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import ProtectedRoute from './ProtectedRoute.js'
import Login from './components/Login.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
      </Router>
    </div>
  );
}

export default App;
