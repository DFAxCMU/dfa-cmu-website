import React from "react";
import TopBar from "../components/TopBar/TopBar";
import AlignedSection from "../components/AlignedSection/AlignedSection";
import Divider from "../components/Divider/Divider";
import ProjectTitle from "../components/ProjectTitle/ProjectTitle.js";
import ProjectSummary from "../components/ProjectSummary/ProjectSummary.js";
import Button from "../components/Button/Button";

const Changemakers = () => {
  return (
    <div>
      <TopBar />
      <ProjectTitle
        title="YMCA\nChangemakers"
        timeline="Fall 2020"
        category="Experience Design / Prototype Design / Social Innovation"
      />
      <Divider />
      <AlignedSection
        hasCoverImage={ false }
        title="Project Overview"
        body="The Changemaker Challenge, a half-day event where students collaborate with like-minded peers and non-profit organizations on a community project. In doing so, the team hopes teens gain access to social good groups and connect with other teens that share their interests."
      >
        <ProjectSummary
          description="YMCA Youth Changemakers are determined to make positive social impact in their communities. The goal of the project is to create program based solutions that can engage and empower youths to be changemakers in their community in both virtual and in-person spaces."
          team={ [["Team Lead", "Michelle Sun"], ["Designers", "Spoorthi Cherivirala, Rachel Legg, Thien Le, Robyn Lee"]] }
          partner="YMCA"
          timeline="1 semester, Fall 2020"
        />
      </AlignedSection>
      <Divider />
      <AlignedSection
        hasCoverImage={ false }
        title="Sketches and Idea Explorations"
        body="Looking at past projects, we targeted &quot;How Can We?&quot; questions and qualifications that we want our solution to have in order to come up with our own new prototype."
      >

      </AlignedSection>
      <Divider />
      <AlignedSection
        hasCoverImage={ false }
        title="Want to Join?"
        body="We are looking for anyone interested in learning how to involve kids in impacting their community. If you are interested in this, community involvement, or have particular skillsets in experience design or drawing, contact our team lead Michelle Sun."
      >
        <Button
          text="Michelle's Email"
          href="https://www.google.com"
          height="100"
          width="1000"
        />
        <Button
          text="DFA D-List Sign Up"
          href="https://www.google.com"
          height="100"
          width="1000"
        />
      </AlignedSection>
      <div style={{marginBottom: "72px"}}></div>
    </div>
    )
  };
  
  export default Changemakers;