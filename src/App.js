import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage';
import HomePage from './components/HomePage/HomePage';
import InputForm from './components/InputForm/InputForm';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact>
          {/* <HomePage buttonsToRender='frontend' /> */}
          <HomePage buttonsToRender='backend' />
        </Route>

        <Route path='/input-page' exact>
          <InputForm />
        </Route>

        <Route path='/details/:projectId' exact>
          {/* <DetailPage buttonsToRender='frontend' /> */}
          <DetailPage buttonsToRender='backend' />
        </Route>
      </div>
    </Router>
  );
}

export default App;
