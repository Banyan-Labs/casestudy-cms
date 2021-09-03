import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
