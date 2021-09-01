import React from 'react';
import ProjectCard from './components/ProjectCard/projectCard'
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
