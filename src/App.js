import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage';
import HomePage from './components/HomePage/HomePage';
import InputForm from './components/InputForm/InputForm';
import EditForm from './components/EditForm/EditForm';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact>
          <HomePage  buttonsToRender='frontend' />
        </Route>

        <Route path='/input-page' exact>
          <InputForm />
        </Route>

        <Route path='/edit-page/:projectId' exact>
          <EditForm  />
        </Route>

        <Route path='/details/:projectId' exact>
          <DetailPage  buttonsToRender='frontend' />
        </Route>
      </div>
    </Router>
  );
}

export default App;
