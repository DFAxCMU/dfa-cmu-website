import React from "react";
import TopBar from "../components/TopBar/TopBar";
import { graphql } from "gatsby";
import ArchivedProjects from "../components/Projects/archived-projects";
import CurrentProjects from "../components/Projects/current-projects";

const Projects = () => {
  return (
    <div>
      <TopBar />
      <h2 className="accent">Projects</h2>
      <ArchivedProjects/>
      <CurrentProjects/>
      <div style={{marginBottom: "72px"}}></div>
    </div>
  )
};
  
export default Projects;
