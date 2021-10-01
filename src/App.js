import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FrontHomePage from './components/FrontHomePage/FrontHomePage';
import BackHomePage from './components/BackHomePage/BackHomePage';
import FrontDetailPage from './components/FrontDetailPage/FrontDetailPage';
import BackDetailPage from './components/BackDetailPage/BackDetailPage';
import InputForm from './components/InputForm/InputForm';
import EditForm from './components/EditForm/EditForm';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact>
          <FrontHomePage />
        </Route>

        <Route path='/backHomePage' exact>
          <BackHomePage />
        </Route>

        <Route path='/frontDetails/:projectId' exact>
          <FrontDetailPage />
        </Route>

        <Route path='/backDetails/:projectId' exact>
          <BackDetailPage />
        </Route>

        <Route path='/input-page' exact>
          <InputForm />
        </Route>

        <Route path='/edit-page/:projectId' exact>
          <EditForm  />
        </Route>

      </div>
    </Router>
  );
}

export default App;
