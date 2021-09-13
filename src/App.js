import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage';
import HomePage from './components/HomePage/HomePage';
import InputForm from './components/InputForm/InputForm';
import { projectData } from './data/projectData';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact>
          <HomePage data={projectData} buttonsToRender='frontend' />
        </Route>
        <Route path='/input-page' exact>
          <InputForm />
        </Route>
        <Route path='/details/:projectId' exact>
          <DetailPage data={projectData} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
