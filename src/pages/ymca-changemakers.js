import React from "react";
import TopBar from "../components/TopBar/TopBar";
import AlignedSection from "../components/AlignedSection/AlignedSection";
import ProjectTitle from "../components/ProjectTitle/ProjectTitle.js";
import ProjectSummary from "../components/ProjectSummary/ProjectSummary.js";

const Changemakers = () => {
  return (
    <div>
    <TopBar />
      <ProjectTitle
        title="YMCA\nChangemakers"
        timeline="Fall 2020"
        category="Experience Design / Prototype Design / Social Innovation"
      />
      <AlignedSection
        hasCoverImage={ false }
        title="Project Overview"
        body=""
      >
        <ProjectSummary
          description="YMCA Youth Changemakers are determined to make positive social impact in their communities. The goal of the project is to create program based solutions that can engage and empower youths to be changemakers in their community in both virtual and in-person spaces."
          team={ [["Team Lead", "Michelle Sun"], ["Designers", "Spoorthi Cherivirala, Rachel Legg, Thien Le, Robyn Lee"]] }
          partner="YMCA"
          timeline="1 semester, Fall 2020"
        />
      </AlignedSection>
    </div>
    )
  };
  
  export default Changemakers;