import React from "react";
import TopBar from "../components/TopBar/TopBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const CurrentProjects = () => {
  return (
    <div>
      <TopBar />
      <ProjectCard
        href="/ymca-changemakers"
        title="YMCA Changemakers"
        category="Social Impact and Community Engagement"
        team="Michelle Sun, Spoorthi Cherivirala, Thien Le, Rachel Legg, Robyn Lee"
        body=""
      />
      <div style={{marginBottom: "72px"}}></div>
    </div>
  )
};

export default CurrentProjects;