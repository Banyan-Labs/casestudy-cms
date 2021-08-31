import React from 'react';
// import { BrowserRouter } from "react-router-dom"
import ProjectCard from './components/ProjectCard/index'
import { projectData } from './data/projectData'
import './App.css';

function App() {
  return (
    <div className="App">
      <ProjectCard data={projectData} />
    </div>
  );
}

export default App;
