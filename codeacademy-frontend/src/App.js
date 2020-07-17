import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import ProtectedRoute from './ProtectedRoute.js';
import Login from './components/Login.js';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Navigation/>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
