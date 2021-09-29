import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage';
import HomePage from './components/HomePage/HomePage';
import InputForm from './components/InputForm/InputForm';
import EditForm from './components/InputForm/EditForm';
import { projectData } from './data/projectData';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact>
          <HomePage data={projectData} /*buttonsToRender='frontend'*/ />
        </Route>

        <Route path='/input-page' exact>
          <InputForm />
        </Route>

        {/* <Route path='/edit-page' exact> */}
        <Route path='/edit-page' exact>
          <EditForm data={projectData} />
        </Route>

        <Route path='/details/:projectId' exact>
          <DetailPage data={projectData} /*buttonsToRender='frontend'*/ />
        </Route>
      </div>
    </Router>
  );
}

export default App;
