import React, {Component, useState} from "react";
import Project from "./Project";
import '../styles/App.css';

const App = () => {
  const [projects, setProjects] = useState([
    { name: "Project 1", description: "Description 1" },
    { name: "Project 2", description: "Description 2" },
    { name: "Project 3", description: "Description 3" },
    { name: "Project 4", description: "Description 4" },
    
  ]);
  return (
    <div id="main">
      <div className="ns-wrapper">
        {/* Map over the projects array and render each project */}
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
    </div>
  )
}


export default App;
