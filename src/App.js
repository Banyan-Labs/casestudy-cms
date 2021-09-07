import React from 'react';

import InputForm from './components/InputForm/InputForm.jsx';

import './App.css';

function App() {
  return (
    <InputForm />

import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage';
import HomePage from './components/HomePage/HomePage';
import { projectData } from './data/projectData';

function App() {
  return (
    <Router>
      <div>
        <Route path='/'>
          <HomePage data={projectData} />
        </Route>
        <Route path='/:projectId' exact component={DetailPage} />
      </div>
    </Router>

  );
}

export default App;
