import React from 'react';
import ProjectCard from './components/ProjectCard/projectCard';
import { projectData } from './data/projectData';

import './App.css';
import EditDelete from './components/EditDelete/EditDelete';

function App() {
  return (
    <div className="App">
      {/* <ProjectCard data={projectData} /> */}
      <EditDelete />
    </div>
  );
};

export default App;
