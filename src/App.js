import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage';
import HomePage from './components/HomePage/HomePage';
import { projectData } from './data/projectData';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact>
          <HomePage data={projectData} buttonsToRender='frontend' />
        </Route>
        <Route path='/:projectId' exact component={DetailPage} />
      </div>
    </Router>
  );
}

export default App;
